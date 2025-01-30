import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Produto from "../../../models/Produto"

function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Produto não encontrado!')
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

            alert('Produto deletado')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro ao deletar o produto.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className='container w-1/3 mx-auto '>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar este produto?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-orange-100 h-1/4'>
                <header 
                    className='py-2 px-6 bg-orange-800 text-orange-50 font-bold text-2xl'>
                    Produto
                </header>
                <p className='p-8 text-3xl bg-orange-100 h-full'>{produto.nome}</p>
                <div className="flex">
                    <button 
                        className='text-orange-100 bg-red-700 hover:bg-red-500 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-orange-300 
                                   hover:bg-orange-800 flex items-center justify-center'
                                   onClick={deletarProduto}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarProduto;