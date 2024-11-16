
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM

function createAndAppendElement(tagName, parentSelector, textContent) {
    const newElement = document.createElement(tagName);
    newElement.textContent = textContent;
    const parentElement = document.querySelector(parentSelector);

    if (parentElement) {
        parentElement.appendChild(newElement);
    }
    else {
        console.error('Parent element not found');
    }
}
// TODO: Create a function that handles the case where there are no blog posts to display

function displayBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blog-posts')) || [];
    const postsContainer = document.getElementById('posts');
    const noPostsMessage = document.getElementById('noPostsMessage');

    if (blogPosts.length === 0) {
        noPostsMessage.style.display = 'block';
    }
    else {
        noPostsMessage.style.display = 'none';

        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>By: ${post.username}</p>
            <p>${post.content}
            `;
            postsContainer.appendChild(postElement);
        });
    }
}



function renderBlogList() {

const blogPosts = JSON.parse(localStorage.getItem('blog-posts')) || [];
const blogList = document.getElementById('blogList')

if (blogPosts.length > 0) {
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.username}</p>
            <p>${post.content}</p>
            `;
        document.getElementById('blogList').appendChild(postElement);
    });
    }
    else {
        noPosts();
    }
}

function noPosts() {
    const messageElement = document.createElement('p');
    messageElement.textContent = "No Blog posts yet...";
    document.getElementById('blogList').appendChild(messageElement);
}

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', () => {
      redirectToPage('index.html');
})

