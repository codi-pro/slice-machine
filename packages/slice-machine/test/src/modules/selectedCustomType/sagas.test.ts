import { describe, it } from "vitest";
import { testSaga } from "redux-saga-test-plan";

import { saveCustomType } from "@src/apiClient";
import { saveCustomTypeSaga } from "@src/modules/selectedCustomType/sagas";
import { openToasterCreator, ToasterType } from "@src/modules/toaster";
import {
  saveCustomTypeCreator,
  selectCurrentCustomType,
  selectCurrentMockConfig,
} from "@src/modules/selectedCustomType";
import { CustomTypeSM } from "@lib/models/common/CustomType";
import { WidgetTypes } from "@prismicio/types-internal/lib/customtypes/widgets";

import {
  rest,
  // type RestContext,
  // type RestRequest,
  // type ResponseComposition,
} from "msw";

// const makeTrackerSpy = () =>
//   jest.fn((_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
//     return res(ctx.json({}));
//   });

// const interceptTracker = (spy: ReturnType<typeof makeTrackerSpy>) =>
//   server.use(rest.post("http://localhost/api/s", spy));

const customTypeModel: CustomTypeSM = {
  id: "about",
  label: "My Cool About Page",
  repeatable: false,
  status: true,
  tabs: [
    {
      key: "Main",
      value: [
        {
          key: "title",
          value: {
            type: WidgetTypes.RichText,
            config: {
              label: "",
              placeholder: "",
              allowTargetBlank: true,
              single:
                "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
            },
          },
        },
      ],
      sliceZone: {
        key: "MainSliceZone",
        value: [],
      },
    },
  ],
};

describe("[Selected Custom type sagas]", () => {
  describe("[saveCustomTypeSaga]", () => {
    it("should call the api and dispatch the good actions on success", (ctx) => {
      ctx.msw.use(rest.post("/api/s", (_req, res, ctx) => res(ctx.json({}))));

      const saga = testSaga(saveCustomTypeSaga);

      saga.next().select(selectCurrentCustomType);
      saga.next(customTypeModel).select(selectCurrentMockConfig);
      saga.next({}).call(saveCustomType, customTypeModel);

      saga
        .next({ errors: [] })
        .put(saveCustomTypeCreator.success({ customType: customTypeModel }));
      saga.next().put(
        openToasterCreator({
          content: "Model & mocks have been generated successfully!",
          type: ToasterType.SUCCESS,
        })
      );
      saga.next().isDone();
    });
    it("should open a error toaster on internal error", () => {
      // const fakeTracker = makeTrackerSpy();
      // interceptTracker(fakeTracker); // warnings happen without this
      const saga = testSaga(saveCustomTypeSaga).next();

      saga.throw(new Error()).put(
        openToasterCreator({
          content: "Internal Error: Custom type not saved",
          type: ToasterType.ERROR,
        })
      );
      saga.next().isDone();
    });
  });
});
