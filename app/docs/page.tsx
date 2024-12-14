import { source } from "@/lib/source";
import { redirect } from "next/navigation";

export default async function Page() {
  redirect("/docs/planning");
  return null;
}

export async function generateStaticParams() {
  return source.generateParams();
}
