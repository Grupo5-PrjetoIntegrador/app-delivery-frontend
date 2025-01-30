import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border border-orange-100 shadow-md flex flex-col rounded overflow-hidden justify-between max-h-80 bg-orange-100">
      <header className="py-2 px-6 bg-orange-900 text-orange-50 font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-orange-100 h-full">{categoria.categoria}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-orange-950 bg-orange-200 hover:bg-orange-400 
                    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-white bg-red-600 
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
