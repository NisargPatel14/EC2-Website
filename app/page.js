import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-20 font-bold text-5xl">
        Demo Website for Amazon EC2 Instance.
      </h1>
      <Link href="/test" className="font-sans font-bold text-blue-600 text-4xl">
        View NASA's Image of the Day.
      </Link>
    </main>
  );
}
