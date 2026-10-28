import PreviewPage from "@/components/PreviewPage";
import { KernFile, startData } from "@/components/v1/kern-fs";

const KernFilePreviewPage = () => {
  return <PreviewPage component={<KernFile list={startData} />} />;
};

export default KernFilePreviewPage;
