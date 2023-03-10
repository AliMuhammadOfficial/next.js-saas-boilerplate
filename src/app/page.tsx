import Link from 'next/link';

import { messages } from '@/messages';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <header>
        <Link href="/about">About</Link>
      </header>
      <h1 className="text-3xl font-bold">{messages.pages.home.heading}</h1>
    </main>
  );
}
