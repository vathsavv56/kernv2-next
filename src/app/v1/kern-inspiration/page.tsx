import ComponentPage from "@/components/ComponentPage";
import {
  AboutKernInspiration,
  KernInspiration,
  KernInspirationCode,
} from "@/components/v1/kern-inspiration";

const KernInspirationPage = () => {
  return (
    <ComponentPage
      about={AboutKernInspiration}
      code={KernInspirationCode}
      component={<KernInspiration />}
      previewLink="/preview/kern-inspiration"
    />
  );
};

export default KernInspirationPage;
