"use client";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search"));

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        links: [
          ["溝通渠道", "/docs/channels"],
          ["溝通渠道 - 聯絡人", "/docs/channels/contacts"],
          ["溝通渠道 - 群組", "/docs/channels/groups"],
          ["AI", "/docs/ai"],
          ["AI - 助理", "/docs/ai/agents"],
        ],
        SearchDialog: SearchDialog,
        options: {
          tags: [
            {
              name: "溝通渠道",
              value: "channels",
            },
            {
              name: "AI",
              value: "ai",
            },
          ],
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
