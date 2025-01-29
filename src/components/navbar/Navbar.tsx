import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-700 text-orange-50'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-3xl">Fast Feast</Link>

                    <div className='flex gap-4'>

                        <p>Restaurantes</p>
                        <p>Seleção fit</p>
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <p>Perfil</p>
                        <p>Sair</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar