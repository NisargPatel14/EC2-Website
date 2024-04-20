import ImageOfTheDay from "./image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-5xl p-10">
        <span className="newsreader text-[#146be4]">NASA's </span>Image of the
        Day.
      </h1>
      <ImageOfTheDay height={500} width={500}/>
    </main>
  );
}
