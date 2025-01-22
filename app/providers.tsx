"use client";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search"));

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        links: [["溝通渠道", "/docs/channels"]],
        SearchDialog: SearchDialog,
        options: {
          tags: [
            {
              name: "溝通渠道",
              value: "channels",
            },
          ],
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
