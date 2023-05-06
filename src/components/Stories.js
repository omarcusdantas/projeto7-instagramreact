import Story from "./Story"

const storiesList = [
    {
        image: "./assets/img/9gag.svg",
        user: "9gag"
    },
    {
        image: "./assets/img/meowed.svg",
        user: "meowed"
    },
    {
        image: "./assets/img/barked.svg",
        user: "barked"
    },
    {
        image: "./assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet"
    },
    {
        image: "./assets/img/wawawicomics.svg",
        user: "wawawicomics"
    },
    {
        image: "./assets/img/respondeai.svg",
        user: "respondeai"
    },
    {
        image: "./assets/img/filomoderna.svg",
        user: "filomoderna"
    },
    {
        image: "./assets/img/memeriagourmet.svg",
        user: "memeriagourmet"
    },
]

export default function Stories() {
    return (
       <div className="stories">
            {storiesList.map((story, index) => 
                <Story key={index} storyInfo={story}/>
            )}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
       </div>
    )
}