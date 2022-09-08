import { useEffect, useState } from "react"

export default function Estatico1() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        setNum(Math.random())
    }, [])
    return (
        //se chamar dessa forma irá gerar erro de renderização devido o conteudo do server ser diferente do lado do client
        <>
            <div>
                <h1>Estático #01</h1>
                <h2>Se chamar assim, irá gerar erro devido ser diferente a renderização do lado do server e do client Math.random()</h2>
            </div>
            <div>
                <h1>Estático #01 - sem erro</h1>
                <h2>{num}</h2>
                <p>conteudo gerado utilizando useState e useEffect, porém deixa de ser SSG</p>
            </div>
        </>
    )
}