// We tunnel the Sentry calls via the h3 server to avoid ad blockers
// adapted from https://github.com/getsentry/examples/blob/0e2f17c5914f28ccae931e51801b7d9760d34cbe/tunneling/nextjs/pages/api/tunnel.js

import { H3Event, readRawBody } from "h3";
import fetch from "node-fetch";

export async function handler(event: H3Event): Promise<Record<string, never>> {
	try {
		const envelope = await readRawBody(event);

		if (!envelope) {
			return {};
		}

		const pieces = envelope.split("\n");

		const header = JSON.parse(pieces[0]);

		const { host, pathname } = new URL(header.dsn);

		const projectId =
			(pathname?.endsWith("/") ? pathname.slice(0, -1) : pathname) ?? "";

		const sentryUrl = `https://${host}/api/${projectId}/envelope/`;
		// TODO fetch does not throw on error
		// handle non 200 errors as well
		await fetch(sentryUrl, {
			method: "POST",
			body: envelope,
		});
	} catch (e) {
		// TODO add this back when we have the express
		//   captureException(e);
	} finally {
		return {};
	}
}
