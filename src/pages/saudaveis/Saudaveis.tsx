import React, { useEffect, useState } from 'react';
import { fetchSaudaveis } from '../../services/Service';
 
const Saudaveis: React.FC = () => {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const url = '/produtos/recomendados/saudaveis';
 
        const carregarProdutos = async () => {
            try {
                await fetchSaudaveis(url, setProdutos);
            } catch (error) {
                console.error('Erro ao carregar produtos saudáveis:', error);
            } finally {
                setLoading(false);
            }
        };
 
        carregarProdutos();
    }, []);
 
    if (loading) {
        return (
<div className="flex justify-center items-center h-screen">
<p className="text-lg font-semibold text-gray-600">Carregando produtos saudáveis...</p>
</div>
        );
    }
 
    return (
<div className="container mx-auto p-6">
<h1 className="text-3xl font-bold text-center mb-8 text-orange-950">Produtos Saudáveis</h1>
            {produtos.length === 0 ? (
<p className="text-center text-gray-500">Nenhum produto saudável encontrado.</p>
            ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {produtos.map((produto) => (
<div
                            key={produto.id}
                            className="border border-orange-100 rounded-lg shadow-md p-4 bg-orange-100 hover:shadow-lg transition-shadow"
>
<h2 className="text-xl font-semibold text-orange-800">{produto.nome}</h2>
<p className="text-orange-950 mt-2">{produto.descricao}</p>
<p className="text-green-500 font-bold mt-4">R$ {produto.preco.toFixed(2)}</p>
</div>
                    ))}
</div>
            )}
</div>
    );
};
 
export default Saudaveis;