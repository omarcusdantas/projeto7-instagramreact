import Post from "./Post"

const postsList = [
    {
        userImage: "./assets/img/meowed.svg",
        user: "meowed",
        content: "./assets/img/gato-telefone.svg",
        alt: "gato-telefone",
        lastLikeUserImage: "./assets/img/respondeai.svg",
        lastLike: "respondeai",
        likes: 101523
    },
    {
        userImage: "./assets/img/barked.svg",
        user: "barked",
        content: "./assets/img/dog.svg",
        alt: "dog",
        lastLikeUserImage: "./assets/img/adorable_animals.svg",
        lastLike: "adorable_animals",
        likes: 99159
    },
    {
        userImage: "./assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet",
        content: "./assets/img/gato-telefone.svg",
        alt: "gato-telefone",
        lastLikeUserImage: "./assets/img/9gag.svg",
        lastLike: "9gag",
        likes: 85721
    }
]

export default function Posts() {
    return (
        <div className="posts">
            {postsList.map((post, index) => 
                <Post key={index} postInfo={post}/>
            )}
       </div>
    )
}