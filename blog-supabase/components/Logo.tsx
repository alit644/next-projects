import { Rotate3d } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // اختر السماكات اللي بدك إياها
});
const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <Rotate3d className="text-[var(--primaryMy)] w-8 h-8" />
        <h1 className={`${orbitron.className} text-2xl font-bold`}>ORBITS</h1>
      </div>
    </Link>
  );
};

export default Logo;
