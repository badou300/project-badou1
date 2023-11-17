document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  if (Array.from(event.target.elements.hobbies.selectedOptions).length !== 2) {
    console.log('stop - pas asez de hobbies');
    alert('Merci de sélectionner au moins 2 hobbies');
    return;
  }

  const target = event.target;
  const elements = target.elements;

  const inputFirstName = elements.firstName;
  const inputAge = elements.age;
  //récupère la valeur du nom et de l'âge
  const firstName = inputFirstName.value.trim();
  const age = Number(inputAge.value);
  //mais la première lettre du nom en majuscule et le reste le laisse en minuscule
  const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  console.log('Formatted First Name:', formattedFirstName);
  console.log('Age:', age);
  //ça récupère le hobby sectionné
  const hobbies = Array.from(event.target.elements.hobbies.selectedOptions);
  //ça récupère les deux hobbies sélectionnés
  const hobbiesOne = hobbies[0].value; 
  const hobbiesTwo = hobbies[1].value; 
  //
   console.log('Hobbies One:', hobbiesOne);
  console.log('Hobbies Two:', hobbiesTwo);
});

const btnAddFriends = document.querySelector('#add__friends');
const inputFriends = document.querySelector('input[name="friend"]');
const blocFriends = document.querySelector('#blocFriends > ul');
let friends = [];
let friendName = null;

btnAddFriends.disabled = true;

inputFriends.addEventListener('input', event => {
  friendName = inputFriends.value;
  //ça vérifie s'il y a bien 3 lettres sur le nom sélectionné des amis
  const condition = friendName.length > 3;
  btnAddFriends.disabled = !condition;
});

btnAddFriends.addEventListener('click', event => {
  inputFriends.value = '';
  //ça ajoute les amis à la liste
  friends.push(friendName);
  console.log('Friend added:', friendName);
  //ça met à jour le bouton Ajouter un amis
  displayFriends(friends);
});

document.querySelector('#blocFriends').addEventListener('click', e => {
  if (e.target.classList.contains('delete__friend')) {
    displayFriends(friends);
  }
});

function displayFriends(friends) {
  blocFriends.innerHTML = '';
  let str = '';

  friends.forEach(friend => {
    str += `
      <li>${friendName}<button class="delete__friend" id="btn__delete__friend" data-friendname="${friendName}" style="margin-left: 20px">Supprimer</button></li>
      `;
  });

  blocFriends.innerHTML = str;
}
