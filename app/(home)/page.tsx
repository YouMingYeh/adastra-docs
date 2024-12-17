import Link from "next/link";

export default function HomePage() {
  return (
    <main className="prose mx-auto flex flex-1 flex-col justify-center">
      <h1 className="mb-4 text-2xl font-bold">Adastra 使用手冊</h1>
      <p className="text-fd-muted-foreground">
        這是 Adastra 的使用手冊，你可以在這裡找到所有如何使用 Adastra 的資訊。
        <br />
        <Link
          href="/docs"
          className="font-semibold text-fd-foreground underline"
        >
          點我開始 →
        </Link>{" "}
      </p>
    </main>
  );
}
