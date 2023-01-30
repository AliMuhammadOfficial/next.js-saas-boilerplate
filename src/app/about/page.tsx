import Link from 'next/link';

import { messages } from '@/messages';

export default function About() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <header>
        <Link href="/">Home</Link>
      </header>
      <h1 className="text-3xl font-bold">{messages.pages.about.heading}</h1>
    </main>
  );
}
