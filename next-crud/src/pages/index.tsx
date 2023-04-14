import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Carlos', 27, '3'),
    new Cliente('Pedro', 20, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir: ${cliente.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 via-pink-400 to-orange-500
      text-white    
    `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido} />
      </Layout >
    </div >
  )
}
