import type { ReactNode } from "react";
import MainContainer from "@/components/MainContainer";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default SiteLayout;
