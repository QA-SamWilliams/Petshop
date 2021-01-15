"use strict";

const petID = document.querySelector("#PETID");
const id = document.querySelector(`#id`);
const name = document.querySelector(`#name`);
const status = document.querySelector(`#status`);
const delID = document.querySelector(`#id2`);
const PetId = document.querySelector('#petId');
const PetId2 = document.querySelector('#petId2');
const PetName = document.querySelector(`#petName`);
const PetCatName = document.querySelector(`#petCatname`);
const PetStatus = document.querySelector(`#petStatus`);
const result = document.querySelector(`#result`);


const getID = () => {
    return [Number.parseFloat(petID.value)];
}

const read = (id) => {
    fetch(`https://petstore.swagger.io/v2/pet/` + id, {
        method: `GET`,
        headers: {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(`Stop! ${err}`));
};

const find = () => {
    let ID = getID();
    read(ID);
}

const createPet = () => {
    fetch("https://petstore.swagger.io/v2/pet", {
        method: 'POST',
        body: JSON.stringify({
            "id": PetId.value,
            "category": {
                "id": PetId2.value,
                "name": PetCatName.value
            },
            "name": PetName.value,
            "photoUrls": [
                //   let img = document.createElement("img");

                //   img.src = "cute_doge.png";
                //   let src = document.getElementById("image");

                //   src.appendChild(img);
            ],
            "status": PetStatus.value,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err => console.error("Error please stop what you're doing")))

}

let update = () => {
    fetch(`https://petstore.swagger.io/v2/pet/` + id.value, {
        method: `POST`,
        body: JSON.stringify({
            "id": id.value,
            "name": name.value,
            "status": status.value,
        }),
        headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(`Stop! ${err}`));
};

let del = () => {
    fetch(`https://petstore.swagger.io/v2/pet/` + delID.value, {
        method: `DELETE`,
        body: JSON.stringify({
            id: delID.value,
        }),
        headers: {
            accept: "application/json",
            api_key: 1,
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(`Stop! ${err}`));
};