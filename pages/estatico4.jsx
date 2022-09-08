//só é executado do lado do servidor
export async function getStaticProps() {
    console.log("[Server] renderizando do lado do servidor...")
    const resp = await fetch('http://localhost:3000/api/produto')
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {
    console.log("[Cliente] renderizando do lado do cliente...")
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>{produto.nome} tem preço de R${produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Estático #04</h1>
            <p>Quando trabalhar com conteudos estaticos fazendo requisições de API, será gerado um erro se não estiver rodando a API no momento do build</p>
            <p>Após o build, é gerado conteúdo estático, pois já foi feita a requisição a API, coletado os dados e montado o componente</p>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}