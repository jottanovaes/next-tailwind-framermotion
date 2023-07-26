'use client'
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}
function Card({ href, imgSrc, layoutId }: CardProps) {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl hover:bg-gray-50 transition">
        <motion.img src={imgSrc} className="h-full w-full" layoutId={layoutId} />
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <h1 className="text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:mt-24">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="grid w-full grid-cols-1 grid-rows-3 mt-10 md:mt-24 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card href="/nextjs" imgSrc="/img/nextjs.svg" layoutId="nextjs-logo" />
        <Card href="/tailwind" imgSrc="/img/tailwind.svg" layoutId="tailwind-logo" />
        <Card href="/framermotion" imgSrc="/img/framermotion.svg" layoutId="framermotion-logo" />
      </div>
    </>
  );
}
