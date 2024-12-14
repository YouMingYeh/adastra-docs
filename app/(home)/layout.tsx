import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { HomeLayout } from "@/components/home";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
