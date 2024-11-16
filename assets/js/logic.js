// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// const toggleButton = document.getElementById('toggle')
// const circle = document.querySelector('.circle');

// function toggleMode() {
//   const currentMode = localStorage.getItem('mode');
//   const newMode = currentMode === 'dark' ? 'light' : 'dark';

//   document.body.classList.remove(currentMode + '-mode');
//   document.body.classList.add(newMode + '-mode');

//   circle.classList.remove(currentMode + '-mode');
//   circle.classList.add(newMode + '-mode');

//   localStorage.setItem('mode', newMode);
//   if (document.body.classList.contains('dark-mode')) {
//     document.documentElement.style.setProperty('--circle-color', 'black');
//   } else {
//     document.documentElement.style.setProperty('--circle-color', 'white');
//   };
// }


// window.onload = () => {
//   const savedMode = localStorage.getItem('mode') || 'light';
//   document.body.classList.add(savedMode + '-mode');
//   circle.classList.add(savedMode + '-mode');
// };


// toggleButton.addEventListener('click', toggleMode);

document.getElementById('toggle').addEventListener('click', function() {
  // Toggle the body class between light and dark mode
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Change the circle color based on the mode
  if (document.body.classList.contains('dark-mode')) {
      document.documentElement.style.setProperty('--circle-color', 'black');
  } else {
      document.documentElement.style.setProperty('--circle-color', 'yellow');
  }
});

// Optional: Set default mode on page load
window.onload = function() {
  // Check local storage for saved mode preference
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
      document.documentElement.style.setProperty('--circle-color', 'black');
  } else {
      document.body.classList.add('light-mode');
      document.documentElement.style.setProperty('--circle-color', 'yellow');
  }
};

// Save mode preference to local storage
document.getElementById('toggle').addEventListener('click', function() {
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', currentMode);
});

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

//let redirectURL = '';

//const redirectPage = function (url) {
//  redirectURL = url;
//  location.assign(url);
//};
function redirectToPage(url) {
  window.location.href = url;
  }
  const backButton = document.getElementById('back');
  backButton.addEventListener('click', () => {
      redirectToPage('index.html');
  })

