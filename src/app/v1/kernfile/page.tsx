import ComponentPage from "@/components/ComponentPage";
import {
  AboutKernFile,
  KernFile,
  KernFileCode,
  startData,
} from "@/components/v1/kern-fs";

const KernFilePage = () => {
  return (
    <ComponentPage
      about={AboutKernFile}
      code={KernFileCode}
      component={<KernFile list={startData} />}
      previewLink="/preview/kernfile"
    />
  );
};

export default KernFilePage;
