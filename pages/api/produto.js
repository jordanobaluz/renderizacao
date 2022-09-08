export default function handler(req, res){
    res.status(200).json([
        {id: 1, nome: 'Caneta', preco: 5.60},
        {id: 2, nome: 'Caderno', preco: 15},
        {id: 3, nome: 'Borracha', preco: 1.60},
        {id: 4, nome: 'Tesoura', preco: 3.60},
        {id: 5, nome: 'Lapis', preco: 0.60}
    ])
}