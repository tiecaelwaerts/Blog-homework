// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleButton = document.getElementById('toggle')
const circle = document.querySelector('.circle');

function toggleMode() {
  const currentMode = localStorage.getItem('mode');
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  document.body.classList.remove(currentMode + '-mode');
  document.body.classList.add(newMode + '-mode');

  circle.classList.remove(currentMode + '-mode');
  circle.classList.add(newMode + '-mode');

  localStorage.setItem('mode', newMode);
}

window.onload = () => {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(savedMode + '-mode');
  circle.classList.add(savedMode + '-mode');
};

toggleButton.addEventListener('click', toggleMode);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage(key){
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
  else {
    return [];
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(key, newData) {
  const existingData = localStorage.getItem(key);
  const blogData = existingData ? JSON.parse(existingData) : [];

  blogData.push(newData);

  localStorage.setItem(key, JSON.stringify(blogData));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

