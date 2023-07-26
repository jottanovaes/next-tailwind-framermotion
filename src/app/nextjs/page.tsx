'use client'
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  imgSrc: string
  layoutId: string
}
function Card({ imgSrc, layoutId }: CardProps) {
  return (
    <motion.img src={imgSrc} className="h-full w-full" layoutId={layoutId} />
  )
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Card imgSrc="/img/nextjs.svg" layoutId="nextjs-logo" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <Link href="/" className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700">Voltar para a Home</Link>
      </motion.div>
    </div >
  );
}
