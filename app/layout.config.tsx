import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Adastra 使用手冊",
    transparentMode: "none",
  },
  links: [
    {
      text: "活動規劃",
      url: "/docs/planning",
      active: "nested-url",
    },
  ],
};
