import Image from "next/image";
import fs from "node:fs/promises";
import Link from "next/link";
 
export default async function Home() {
  const files = await fs.readdir("./public/assets");
  const images = files
    .map((file) => `/assets/${file}`);
 
  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold">Images</h1>
        <Link
          href="/upload"
          className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Upload New Image
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {images.map((image) => (
          <div key={image} className="max-w-sm border border-gray-200 rounded-md shadow">
            <div className="relative aspect-video">
              <Image
                key={image}
                src={image}
                alt={image}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-md object-cover"
              />
            </div>
          </div>
        ))}
 
      </div>
    </div>
  );
}