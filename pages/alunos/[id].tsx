export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')

    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: { id: `${id}` } }
    })

    return {
        fallback: true, // se false, quando não encontrar retorna 404
        paths
    }
}

export async function getStaticProps(context) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)

    const aluno = await resp.json()

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props
    return (
        <div>
            <h1>Detalhes dos alunos</h1>
            {
                aluno ?
                    <ul>
                        <li>{aluno.id}</li>
                        <li>{aluno.nome}</li>
                        <li>{aluno.email}</li>
                    </ul>
                    : false
            }

        </div>
    )
}