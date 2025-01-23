import { Card, Cards } from "@/components/card";
import { BookCheck, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex flex-1 flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Adastra 使用手冊</h1>

      <p className="text-fd-muted-foreground">
        這是 Adastra 的使用手冊，您可以在這裡找到所有如何使用 Adastra 的資訊。
        <br />
      </p>
      <Cards className="mt-8 w-full">
        <Card
          icon={<LayoutDashboard />}
          title={"Adastra 工作空間→"}
          description="前往 Adastra 工作空間"
          href="https://adastra.tw"
        />
        <Card
          icon={<BookCheck />}
          title={"點我開始 →"}
          description="閱讀使用手冊"
          className="border-fd-primary shadow-fd-primary"
          href="/docs"
        />
      </Cards>
    </main>
  );
}
