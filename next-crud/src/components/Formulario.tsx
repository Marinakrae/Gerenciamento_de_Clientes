import Cliente from "../core/Cliente"
import Entrada from "./Entrada"
import { useState } from "react"

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState()
    return (
        <div>
            <Entrada texto="Nome" valor="Teste" />
            <Entrada texto="Idade" tipo="number" valor="Teste" />
        </div>
    )
}