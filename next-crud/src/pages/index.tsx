import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import 'firebase/compat/firestore';
import useClientes from '../hooks/useClientes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400
      text-white    
    `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela} />
        )}
      </Layout >
    </div >
  )
}
