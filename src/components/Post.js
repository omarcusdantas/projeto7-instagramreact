import React from "react"

export default function Post() {
    const [bookMark, setBookMark] = React.useState("bookmark-outline");
    const [numberLikes, setNumberLikes] = React.useState(101523);
    const [likeState, setLikeState] = React.useState({name: "heart-outline", class: ""});

    function toggleSave() {
        if (bookMark === "bookmark") {
            setBookMark("bookmark-outline");
            return;
        }
        setBookMark("bookmark");
    }

    function clickLike() {
        if (likeState.name !== "heart") {
            setLikeState({name: "heart", red: "red-heart"});
            setNumberLikes(numberLikes+1);
        }
    }

    function toggleLike() {
        if (likeState.name === "heart") {
            setLikeState({name: "heart-outline", red: ""})
            setNumberLikes(numberLikes-1);
            return;
        }
        setLikeState({name: "heart", red: "red-heart"});
        setNumberLikes(numberLikes+1);
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src="./assets/img/meowed.svg" alt="meowed"/>
                    meowed
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src="./assets/img/gato-telefone.svg" alt="gato-telefone" onClick={clickLike}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likeState.name} class={likeState.red} onClick={toggleLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookMark} onClick={toggleSave}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="./assets/img/respondeai.svg" alt="respondeai"/>
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {numberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}