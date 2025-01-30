import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-gray-800 text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.categoria}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
