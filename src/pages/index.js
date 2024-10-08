import Image from "next/image";
import { Inter } from "next/font/google";
import Content from "../components/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`scroll-smooth flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Content/>
    </main>
  );
}
