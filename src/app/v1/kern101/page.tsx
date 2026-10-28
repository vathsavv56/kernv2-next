import ComponentPage from "@/components/ComponentPage";
import { KernOne, KernOneAbout, KernOnecode } from "@/components/v1/kern-1";

const Kern101Page = () => {
  return (
    <ComponentPage
      about={KernOneAbout}
      code={KernOnecode}
      component={<KernOne name="Click Me" />}
      previewLink="/preview/kern101"
    />
  );
};

export default Kern101Page;
