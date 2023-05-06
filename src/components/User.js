import React from "react"

export default function User() {
    const [name, setName] = React.useState("catanacomics");
    const [profilePic, setProfilePic] = React.useState("./assets/img/catanacomics.svg");

    function changeProfilePic() {
        const newProfilePic = prompt("Novo foto de perfil");
        if (newProfilePic !== "") {
            setProfilePic(newProfilePic);
        }
    }

    function changeName() {
        const newName = prompt("Novo nome");
        if (newName !== "") {
            setName(newName);
        }
    }

    return (
        <div className="usuario">
            <img src={profilePic} alt="imagem de perfil" onClick={changeProfilePic}/>
            <div className="texto">
                <span>
                    <strong>{name}</strong>
                    <ion-icon name="pencil" onClick={changeName}></ion-icon>
                </span>
            </div>
        </div>
    )
}