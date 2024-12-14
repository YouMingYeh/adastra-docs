import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Adastra 使用手冊</h1>
      <p className="text-fd-muted-foreground">
        <Link
          href="/docs"
          className="font-semibold text-fd-foreground underline"
        >
          點我開始
        </Link>{" "}
      </p>
    </main>
  );
}
