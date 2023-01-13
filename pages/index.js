import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/home-page/hero'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Hero/>
    </>
  )
}
