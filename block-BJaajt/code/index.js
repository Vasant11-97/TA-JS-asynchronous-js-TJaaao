let input = document.querySelector('input');
let image = document.querySelector('img');
let name = document.querySelector('h2');
let userId = document.querySelector('.id');
let followers = document.querySelector('.followers');
let followings = document.querySelector('.followings');

function displayUI(data) {
  image.src = data.avatar_url;
  name.innerText = data.name;
  userId.innerText = `GitHub Id: ${data.id}`;
  followings.innerText = `Following: ${data.following}`;
  followers.innerText = `Followers: ${data.followers}`;
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log(`Something went wrong...`);
    };
    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener('keyup', handleChange);

// tV0_IjVeAmKipPB7a--bRUFoFL96YLAdfYB9A4xs6-w
// https://api.unsplash.com/photos/random

let button = document.querySelector('button');

const img = document.querySelector('.cat');
const reload = document.querySelector('button');
reload.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.thecatapi.com/v1/images/search?limit=1&size=full'
  );
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    img.src = imageData[0].url;
  };
  xhr.onerror = function () {
    console.log('Something went wrong...');
  };
  xhr.send();
});
