import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-orange-700 text-orange-50">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl'>
                            FastFeast | Copyright: {data}
                        </p>
                    <p className='text-lg font-thin'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' className='hover:text-yellow-500'/>
                        <InstagramLogo size={48} weight='bold' className='hover:text-yellow-500'/>
                        <FacebookLogo size={48} weight='bold' className='hover:text-yellow-500'/>
                        <Link to='https://github.com/Grupo5-PrjetoIntegrador' className='hover:text-teal-900'>
                            <GithubLogo size={48} weight='bold' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer