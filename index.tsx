import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente(`Ana`, 34, `1`),
    new Cliente(`Carlos`, 23, `2`),
    new Cliente(`Pedro`, 45, `3`),
    new Cliente(`Lia`, 19, `4`),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')


  }

  function clienteExcluido(cliente: Cliente){


  }

    function novoCliente() {
      setCliente(Cliente.vazio())
      setVisivel('form')
    }
  
  function salvarCLiente(cliente: Cliente){
    setVisivel('tabela')

  }




  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
     <Layout titulo="Cadastro simples">
       {visivel === 'tabela' ? (
        <>
       <div className="flex justify-end">
         <Botao cor="green" 
         onClick={novoCliente}
         className="mb-4">
           Novo Cliente
          </Botao>
       </div>
       <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}
         />

       </>

       ) :(
     
       <Formulario cliente={cliente}
       clienteMudou={salvarCLiente}
       cancelado={() => setVisivel('tabela')}
       /> 
       )}
     </Layout>
    </div>
  )
}
