import type { ReactNode } from "react";

interface PreviewPageProps {
  component: ReactNode;
}

const PreviewPage = ({ component }: PreviewPageProps) => {
  return (
    <div className="h-screen w-full bg-[#121212]  flex items-center justify-center">
      {component}
    </div>
  );
};

export default PreviewPage;
