import { useRouter } from "next/router";

import { useCustomTypeReducer } from "src/models/customType/modelReducer";
import { CustomType, ObjectTabs } from "@lib/models/common/CustomType";
import CustomTypeBuilder from "@lib/builders/CustomTypeBuilder";
import { CustomTypeMockConfig } from "@lib/models/common/MockConfig";
import { useSelector } from "react-redux";
import { SliceMachineStoreType } from "@src/redux/type";
import { getEnvironment } from "@src/modules/environment";
import { selectCustomTypeById } from "@src/modules/customTypes";
import useSliceMachineActions from "@src/modules/useSliceMachineActions";
import {useEffect} from "react";

type CustomTypeBuilderWithProviderProps = {
  customType: CustomType<ObjectTabs>;
  remoteCustomType?: CustomType<ObjectTabs>;
};

const CustomTypeBuilderWithProvider: React.FunctionComponent<CustomTypeBuilderWithProviderProps> =
  ({ customType, remoteCustomType }) => {
    const { initCustomTypeStore } = useSliceMachineActions();
    const { env } = useSelector((store: SliceMachineStoreType) => ({
      env: getEnvironment(store),
    }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const initialMockConfig = CustomTypeMockConfig.getCustomTypeMockConfig(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      env.mockConfig,
      customType.id
    );
    const [Model, customTypeActions] = useCustomTypeReducer({
      customType,
      remoteCustomType,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      initialMockConfig,
    });

    useEffect(() => {
      initCustomTypeStore(
        CustomType.toArray(customType),
        initialMockConfig
      )
    }, [])

    return (
      <CustomTypeBuilder
        Model={Model}
        customTypeActions={customTypeActions}
      />
    );
  };

const CustomTypeBuilderWithRouter = () => {
  const router = useRouter();
  const { selectedCustomType } = useSelector(
    (store: SliceMachineStoreType) => ({
      selectedCustomType: selectCustomTypeById(
        store,
        router.query.ct as string
      ),
    })
  );

  if (!selectedCustomType) {
    void router.replace("/");
    return null;
  }

  return (
    <CustomTypeBuilderWithProvider
      customType={selectedCustomType.local}
      remoteCustomType={selectedCustomType.remote}
    />
  );
};

export default CustomTypeBuilderWithRouter;
