import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.iconify.design/collection?prefix=material-symbols&info=true&chars=true&aliases=true")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 gap-6 ${inter.className}`}>
      <div className="font-bold mb-3">{data?.title}</div>
      <div>
        <div className="flex gap-4">
          <span>Author:</span>
          <a href={data?.info?.author?.url}>{data?.info?.author?.name}</a>
        </div>
        <div className="flex gap-4">
          <span>Number of icons:</span>
          <span>{data?.info?.total}</span>
        </div>
        <div className="flex gap-4">
          <span>Height of icons:</span>
          <span>{data?.info?.height}</span>
        </div>
        <div className="flex gap-4">
          <span>prefix:</span>
          <span>{data?.prefix}</span>
        </div>
      </div>
      <div>
        <div className="font-bold mb-3">Categories</div>
        <div className="flex gap-3 flex-wrap w-[600px]">
          {Object.keys?.(data?.categories ?? {}).map((category: any) => (
            <div key={category}>{category}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
