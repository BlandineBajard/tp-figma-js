const NOM = document.getElementById('nom');
const PRENOM = document.getElementById('prenom');
const IDENTIFIANT = document.getElementById('identifiant');
const EMAIL = document.getElementById('email');
const AVATAR = document.getElementById('avatar');
const MEMBER = document.getElementById('personne');

const API_URL = "https://reqres.in/api/users?page=1";


fetch(API_URL)
.then((response) => {
    console.log(response);
    return response.json()
})
.then(responsFormat => {
    console.log(responsFormat);
    NOM.innerText = responsFormat.data[0].last_name;
    PRENOM.innerText = responsFormat.data[0].first_name;
    IDENTIFIANT.innerText = responsFormat.data[0].id;
    EMAIL.innerText = responsFormat.data[0].email;
    AVATAR.src = responsFormat.data[0].avatar;


for(let index = 0; index <6; index++){
        console.log(data[0]);
        console.log(data[index]);
        const PERSONNE = responsFormat[data[0]];
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


.catch(err => {
    console.error(err);
});