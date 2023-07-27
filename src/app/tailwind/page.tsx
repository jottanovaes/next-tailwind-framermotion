'use client'
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  imgSrc: string
  layoutId: string
}
function Card({ imgSrc, layoutId }: CardProps) {
  return (
    <motion.img src={imgSrc} layoutId={layoutId} />
  )
}

export default function Tailwind() {
  return (
    <div className="flex flex-col items-center">
      <Card imgSrc="/img/tailwind.svg" layoutId="tailwind-logo" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <Link href="/" className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700">Voltar para a Home</Link>
      </motion.div>
    </div >
  );
}
