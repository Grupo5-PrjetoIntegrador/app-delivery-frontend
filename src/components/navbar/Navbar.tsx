import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-700 text-orange-50'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-3xl font-semibold">Fast Feast</Link>

                    <div className='flex gap-4'>
                        <p className='hover:text-yellow-500'>Restaurantes</p>
                        <Link to='/saudaveis' className='hover:text-yellow-500'>Seleção Fit</Link>
                        <Link to='/categorias' className='hover:text-yellow-500'>Categorias</Link>
                        <Link to='/produtos' className='hover:text-yellow-500'>Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar