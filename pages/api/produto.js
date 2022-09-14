function numeroAleatorio(min = 1, max = 1000){
    return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res){
    res.status(200).json([
        {id: numeroAleatorio(), nome: 'Caneta', preco: 5.60},
        {id: numeroAleatorio(), nome: 'Caderno', preco: 15},
        {id: numeroAleatorio(), nome: 'Borracha', preco: 1.60},
        {id: numeroAleatorio(), nome: 'Tesoura', preco: 3.60},
        {id: numeroAleatorio(), nome: 'Lapis', preco: 0.60}
    ])
}