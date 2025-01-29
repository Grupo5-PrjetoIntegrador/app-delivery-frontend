
function Home() {
    return (
        <>
            <div className="bg-orange-50 flex justify-center">
                <div className='container grid grid-cols-2 text-orange-700'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Fast Feast
                        </h2>
                        <p className='text-xl'>
                            Chega rápido e come bem!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-orange-50
                                            text-orange-50 border-orange-700 bg-orange-700 border-solid border-2 py-2 px-4 font-semibold'
                                >
                                Peça já!
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src='https://ik.imagekit.io/caciasrs/PI%20-%20Gen%20Delivery/home.png?updatedAt=1738169813950'
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home