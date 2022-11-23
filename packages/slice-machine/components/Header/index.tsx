import Link from "next/link";
import { Flex, Box, Link as ThemeLink } from "theme-ui";
import { ThemeUIStyleObject } from "@theme-ui/css";
import { Button } from "@components/Button";

type HeaderProps = {
  ActionButton?: React.ReactElement;
  MainBreadcrumb: React.ReactElement;
  SecondaryBreadcrumb?: React.ReactElement;
  breadrumbHref: string;
  sx?: ThemeUIStyleObject;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  ActionButton,
  MainBreadcrumb,
  SecondaryBreadcrumb,
  breadrumbHref,
  children,
  sx,
}) => (
  <Flex sx={{ justifyContent: "space-between", alignItems: "start", ...sx }}>
    <Flex sx={{ flexDirection: "column" }}>
      <Flex
        sx={{
          fontSize: SecondaryBreadcrumb ? [3, 2, 4] : 4,
          fontWeight: "heading",
          alignItems: "center",
        }}
      >
        <Link href={breadrumbHref} passHref>
          <ThemeLink variant="invisible">
            <Flex sx={{ alignItems: "center" }}>{MainBreadcrumb}</Flex>
          </ThemeLink>
        </Link>
        <Box sx={{ fontWeight: "thin" }} as="span">
          {SecondaryBreadcrumb ? SecondaryBreadcrumb : null}
        </Box>
      </Flex>
      {children ? (
        <Flex mt={3} sx={{ alignItems: "center" }}>
          <Flex sx={{ alignItems: "center" }}>{children}</Flex>
        </Flex>
      ) : null}
    </Flex>
    <Button
      label="🔥🔥🔥 Hello Sentry 🔥🔥🔥"
      onClick={() => {
        throw new Error("Hello Sentry!");
      }}
    />
    {ActionButton ? ActionButton : null}
  </Flex>
);

export default Header;
