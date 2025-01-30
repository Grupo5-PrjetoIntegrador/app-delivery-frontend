import Popup from 'reactjs-popup';
import FormProduto from '../formproduto/FormProduto';

import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='rounded text-orange-50
                                        border-orange-700 bg-orange-700 border-solid border-2 py-3 px-4 font-semibold hover:bg-orange-500 hover:border-orange-500'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;