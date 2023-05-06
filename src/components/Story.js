export default function Stories(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.storyInfo.image} alt={props.storyInfo.user}/>
            </div>
            <div className="usuario">
                {props.storyInfo.user}
            </div>
        </div>
    )
}