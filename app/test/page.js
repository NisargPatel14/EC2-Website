import ImageOfTheDay from "./image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-5xl p-10">NASA's Image of The Day.</h1>
      <ImageOfTheDay height={500} width={500} />
    </main>
  );
}
