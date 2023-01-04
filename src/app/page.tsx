import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center' 
      }}
    >
      <h1>Next.js SaaS Boilerplate</h1>
      <p>Build Your Next SaaS Product with Fully-Featured Open-Source Next.js Boilerplate</p>
    </main>
  )
}
