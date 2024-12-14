"use client";

import DefaultSearchDialog, {
  DefaultSearchDialogProps,
} from "fumadocs-ui/components/dialog/search-default";

type SearchDialogProps = DefaultSearchDialogProps;

export default function SearchDialog(props: SearchDialogProps) {
  return <DefaultSearchDialog allowClear {...props} />;
}
