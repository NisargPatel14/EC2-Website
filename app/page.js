import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="inter font-bold mb-20 text-5xl">
        Website for <span className="newsreader text-[#ff9900]">Amazon EC2 </span> Instance.
      </h1>
      <Link href="/test" className="font-bold text-4xl underline underline-offset-4">
        View <span className="newsreader text-[#146be4]">NASA's </span>Image of the Day.
      </Link>
    </main>
  );
}
