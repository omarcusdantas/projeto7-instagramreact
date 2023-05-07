import React from "react"

export default function Post(props) {
    const [bookMark, setBookMark] = React.useState("bookmark-outline");
    const [numberLikes, setNumberLikes] = React.useState(props.postInfo.likes);
    const [likeState, setLikeState] = React.useState({name: "heart-outline", red: false, animation: false});

    function toggleSave() {
        if (bookMark === "bookmark") {
            setBookMark("bookmark-outline");
            return;
        }
        setBookMark("bookmark");
    }

    function clickLike() {
        if (likeState.name !== "heart") {
            setLikeState({name: "heart", red: true, animation: true});
            setNumberLikes(numberLikes+1);
            setTimeout(() => setLikeState({name: "heart", red: true, animation: false}),500)
        }
    }

    function toggleLike() {
        if (likeState.name === "heart") {
            setLikeState({name: "heart-outline", red: false})
            setNumberLikes(numberLikes-1);
            return;
        }
        setLikeState({name: "heart", red: true});
        setNumberLikes(numberLikes+1);
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postInfo.userImage} alt={props.postInfo.user}/>
                    {props.postInfo.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postInfo.content} alt={props.postInfo.alt} onDoubleClick={clickLike} data-test="post-image"/>
                {likeState.animation && <ion-icon name="heart" class="heart-animation"></ion-icon>}
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likeState.name} class={likeState.red ? "red-heart" : ""} onClick={toggleLike} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookMark} onClick={toggleSave} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.postInfo.lastLikeUserImage} alt={props.postInfo.lastLike}/>
                    <div className="texto">
                        Curtido por <strong>{props.postInfo.lastLike}</strong> e <strong data-test="likes-number">outras {numberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}