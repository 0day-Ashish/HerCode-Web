"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen top-0">
        <Link
          href="/"
          className="absolute top-4 left-4"
        >
          <Image
            src="/logo1.png"
            alt="Logo"
            width={300}
            height={200}
            className="block mt-0 " 
          />
        </Link>
      </div>
    </>
  );
}
