interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string;
    valor: any
    somenteLeitura?: boolean
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`
                    border border-pruple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'} 
                `}
            />
        </div>
    )
}