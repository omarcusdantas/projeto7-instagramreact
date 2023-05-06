import Suggestion from "./Suggestion"

const suggestionsList = [
    {
        image: "./assets/img/bad.vibes.memes.svg",
        user: "bad.vibes.memes"
    },
    {
        image: "./assets/img/chibirdart.svg",
        user: "chibirdart"
    },
    {
        image: "./assets/img/razoesparaacreditar.svg",
        user: "razoesparaacreditar"
    },
    {
        image: "./assets/img/adorable_animals.svg",
        user: "adorable_animals"
    },
    {
        image: "./assets/img/smallcutecats.svg",
        user: "smallcutecats"
    }
]

export default function Stories() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsList.map((story, index) => 
                <Suggestion key={index} suggestionInfo={story}/>
            )}
        </div>
    )
}