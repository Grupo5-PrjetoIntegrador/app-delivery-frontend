function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-700 text-orange-50'>
            
                <div className="container flex justify-between text-lg">
                    Home

                    <div className='flex gap-4'>
                        Restaurantes
                        Seleção fit
                        Categorias
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar