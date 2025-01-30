import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutosProps{
    produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border border-orange-100 shadow-md flex flex-col rounded overflow-hidden justify-between max-h-80 bg-orange-100'>
                
            <div>
                <div className="flex w-full bg-orange-200 py-2 px-4 items-center gap-4">
                    <img src='https://ik.imagekit.io/caciasrs/PI%20-%20Gen%20Delivery/logo.png?updatedAt=1738169812557'
                         className='h-12 rounded-full' alt="Logo do App" />
                    <h3 className='text-lg font-bold text-center uppercase text-orange-950'>
                        Fast Feast
                    </h3>
                </div>
                <div className='p-4 bg-orange-100'>
                    <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                    <p>{produto.descricao}</p>
                    <p>Categoria: {produto.categoria?.categoria}</p>
                    <p>Quantidade: {produto.quantidade}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarproduto/${produto.id}`}
                	className='w-full text-orange-950 bg-orange-200 hover:bg-orange-400 
                    flex items-center justify-center py-2'>
	                <button>Editar</button>
                </Link>
                <Link to={`/deletarproduto/${produto.id}`} className='text-white bg-red-600 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos