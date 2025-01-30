import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutosProps{
    produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-gray-700 py-2 px-4 items-center gap-4">
                    <img src='https://i.imgur.com/pK6vSCy.png'
                         className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase text-slate-100'>
                        Nome do Usuário
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                    <p>{produto.descricao}</p>
                    <p>Categoria: {produto.categoria?.categoria}</p>
                    <p>Quantidade: {produto.quantidade}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarproduto/${produto.id}`}
                	className='w-full text-slate-100 bg-gray-700 hover:bg-gray-800 
                    flex items-center justify-center py-2'>
	                <button>Editar</button>
                </Link>
                <Link to='' className='text-white bg-red-700 
                    hover:bg-red-500 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos