//só é executado do lado do servidor
export async function getServerSideProps() {
    console.log("[Server] renderizando do lado do servidor...")
    const resp = await fetch('http://localhost:3000/api/produto')
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico2(props) {
    console.log("[Cliente] renderizando do lado do cliente...")
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} tem preço de R${produto.preco}
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Dinamico #02</h1>
            <p>Quando trabalhar com conteudos dinamico fazendo requisições de API, será gerado um novo id a cada nova requisição</p>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}