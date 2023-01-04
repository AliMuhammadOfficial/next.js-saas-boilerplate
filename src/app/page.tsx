import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex h-screen flex-col items-center justify-center`}
    >
      <h1 className="text-3xl font-bold">Next.js SaaS Boilerplate</h1>
      <p>
        Build Your Next SaaS Product with Fully-Featured Open-Source Next.js
        Boilerplate
      </p>
    </main>
  );
}
