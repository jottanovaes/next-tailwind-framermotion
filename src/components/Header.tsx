import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center py-2 md:py-4 md:justify-between items-center">
      <Image src="/img/logo.svg" alt="logo" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        <Link href="#" className="tracking-wide hover:text-gray-300">Next.js</Link>
        <Link href="#" className="tracking-wide hover:text-gray-300">Tailwind CSS</Link>
              <Link href="#" className="tracking-wide hover:text-gray-300">Framer Motion</Link>
      </nav>
    </header>
  );
}
