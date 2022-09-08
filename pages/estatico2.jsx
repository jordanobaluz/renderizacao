//convensão que é utilizada para SSG e renderizar conteudos estaticos
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
            <p>Ao utilizar getStaticProps não será gerado erro de renderização, porém só irá funcionar após ser feito o build, onde o conteúdo se torno estático</p>
        </div>
    )
}