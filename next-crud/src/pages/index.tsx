import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={
      `
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 via-pink-400 to-orange-500
      text-white    
      `
    }>
      <Layout titulo='Cadastro Simples'>
        <span>Conteudo</span>
      </Layout>
    </div >
  )
}
