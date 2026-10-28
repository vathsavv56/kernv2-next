import ComponentPage from "@/components/ComponentPage";
import {
  AboutKernFooter,
  KernFooter,
  KernFooterCode,
} from "@/components/v1/kern-footer";

const KernFooterPage = () => {
  return (
    <ComponentPage
      about={AboutKernFooter}
      code={KernFooterCode}
      component={<KernFooter />}
      previewLink="/preview/kern-footer"
    />
  );
};

export default KernFooterPage;
