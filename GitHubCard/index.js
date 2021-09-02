/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const { default: axios } = require("axios");

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(card) {
  const cardClass = document.createElement('div');
  const userIMG = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUN = document.createElement('p');
  const cardLoca = document.createElement('p');
  const cardProf = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const cardBio = document.createElement('p');
  const address = document.createElement('a');


  cardClass.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name')
  cardUN.classList.add('username');
  
  
  userIMG.src = card.cardImgURL;
  cardName.textContent = card.name;
  cardUN.textcontent = card.username;
  cardLoca.textContent = `Location: ${card.location}`;
  cardProf.textContent = `Profile: ${address}`;
  followers.textContent = `Followers: ${card.followers}`;
  following.textContent = `Following: ${card.following}`;
  cardBio.textContent = `Bio: ${card.bio}`

  cardClass.appendChild(userIMG);
  cardClass.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUN);
  cardInfo.appendChild(cardLoca);
  cardInfo.appendChild(cardProf);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(cardBio);
  cardProf.appendChild(address);


  return cardClass;
}

const beenza = document.querySelector('.cards')


const createCard = (person) => {


  axios.get(`https://api.github.com/users/${person}`)
  .then(res => {
    const info = {name: res.data.name, username: res.data.login, profile: res.data.login, followers: res.data.followers, following: res.data.following,
      bio: res.data.bio, cardImgURL: res.data.avatar_url, Location: res.data.location, url: res.data.url};
      beenza.appendChild(cardMaker(info))
  })
  .catch(err => {
    console.log(err)
  })
}



const array = ['addybeuch','tetondan','dustinmyers','justsml','luishrd','bigknell']
array.forEach((fart) => {
  createCard(fart);
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
