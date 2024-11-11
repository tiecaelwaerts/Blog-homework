// TODO: Create a variable that selects the form element

const formElement = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
event.preventDefault();

const username = document.getElementById('username').value.trim();
const title = document.getElementById('title').value.trim();
const content = document.getElementById('content').value.trim();
const errorElement = document.getElementById('error');

errorElement.textContent = '';

if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
    return;
}

const blogPost = {
    username: username,
    title: title,
    content: content
};

const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
blogPosts.push(blogPost);
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

redirectPage();

}

function redirectPage() {
    window.location.href = 'blog.html';
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

document.getElementById('blogForm').addEventListener('submit', handleFormSubmission);
