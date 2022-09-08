export function getStaticProps() {
    return {
        revalidate: 7, //segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
            <p>Utilizando a propriedade revalidate, será modificado o conteudo de acordo com o tempo espeficado, assim gerando incremental static regeneration - ISR</p>
        </div>
    )
}