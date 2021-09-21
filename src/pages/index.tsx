import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente(`Ana`, 34, `1`),
    new Cliente(`Carlos`, 23, `2`),
    new Cliente(`Pedro`, 45, `3`),
    new Cliente(`Lia`, 19, `4`),
  ]

  function clienteSelecionado(cliente: Cliente){


  }

  function clienteExcluido(cliente: Cliente){


  }


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
     <Layout titulo="Cadastro simples">
       <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}>

       </Tabela>
     </Layout>
    </div>
  )
}
