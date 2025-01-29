import Produto from "./Produto"

export default interface Categoria {
    id: number;
    categoria: string;
    postagem?: Produto | null;
}