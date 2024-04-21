import ImageOfTheDay from "./image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-5xl p-10">
        <span className="newsreader text-[#146be4]">NASA's </span>Astronomy Picture of the Day.
      </h1>
      <ImageOfTheDay/>
    </main>
  );
}
