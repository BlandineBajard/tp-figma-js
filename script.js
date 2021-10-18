const NOM = document.getElementById('nom');
const PRENOM = document.getElementById('prenom');
const IDENTIFIANT = document.getElementById('identifiant');
const EMAIL = document.getElementById('email');
const AVATAR = document.getElementById('avatar');
const MEMBER = document.getElementById('personne');
const BUTTON = document.getElementById ('page2');

const API_URL = "https://reqres.in/api/users?page=1";
fetch(API_URL)
.then((response) => {
    console.log(response);
    return response.json()
})
.then(responsFormat => {
    console.log(responsFormat);
    for(let index = 0; index <6; index++){
        console.log(responsFormat.data[index]);
        const PERSONNE = responsFormat.data[index];
        console.log(PERSONNE);
    
        MEMBER.innerHTML +=`
        <div = fiche>
        <img src="${PERSONNE.avatar}" alt="Photo d'identité">
        <p id= "nom">${PERSONNE.last_name}</p>
        <p id="prenom">${PERSONNE.first_name}</p>
        <p id ="identifiant">${PERSONNE.id}</p>
        <p id = "email">${PERSONNE.email}</p>
        </div>
    `

       /* NOM.innerText = responsFormat.data[0].last_name;
        PRENOM.innerText = responsFormat.data[0].first_name;
        IDENTIFIANT.innerText = responsFormat.data[0].id;
        EMAIL.innerText = responsFormat.data[0].email;
        AVATAR.src = responsFormat.data[0].avatar;*/

    }

    BUTTON.addEventListener('click', ()=>{
        const API_PAGE2 = "https://reqres.in/api/users?page=2";
        fetch(API_PAGE2)
.then((response2) => {
    console.log(response2);
    return response2.json()
})
.then(responsFormat2 => {
    console.log(responsFormat2);
    for(let index = 0; index <6; index++){
        console.log(responsFormat2.data[index]);
        const PERSONNE = responsFormat2.data[index];
        console.log(PERSONNE);
    
        MEMBER.innerHTML +=`
        <div>
        <p>${PERSONNE.last_name}</p>
        <p>${PERSONNE.first_name}</p>
        <p>${PERSONNE.id}</p>
        <p>${PERSONNE.email}</p>
        <img src="${PERSONNE.avatar}" alt="">
        </div>
    `
}

        })


}
)



.catch(err => {
    console.error(err);
})
});