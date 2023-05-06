import React from "react"

export default function User() {
    const [name, setName] = React.useState("catanacomics");
    const [profilePic, setProfilePic] = React.useState("./assets/img/catanacomics.svg");

    function changeProfilePic() {
        const newProfilePic = prompt("Novo foto de perfil");
        if (newProfilePic !== "" && newProfilePic !== null) {
            setProfilePic(newProfilePic);
        }
    }

    function changeName() {
        const newName = prompt("Novo nome");
        if (newName !== "" && newName !== null) {
            setName(newName);
        }
    }

    return (
        <div className="usuario">
            <img src={profilePic} alt="imagem de perfil" onClick={changeProfilePic} data-test="profile-image"/>
            <div className="texto">
                <span>
                    <strong data-test="name">{name}</strong>
                    <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}