interface BotaoProps{
    children: any
    cor?: `green` | `blue` | `gray`
}

export default function Botao(props: BotaoProps) {
    return(
        <button>
            {props.children}
        </button>
    )
}