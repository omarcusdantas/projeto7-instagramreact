export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.suggestionInfo.image} alt={props.suggestionInfo.user} />
                <div className="texto">
                    <div className="nome">{props.suggestionInfo.user}</div>
                    <div className="razao">{props.suggestionInfo.follow ? "Segue você" : "Novo no Instagram"}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}