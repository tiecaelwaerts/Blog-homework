// TODO: Create a variable that selects the form element

const formElement = document.getElementById('blogPosts');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
event.preventDefault();

const username = document.getElementById('username').value;
const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const errorElement = document.getElementById('error');

errorElement.textContent = '';

if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form.";
    return;
}

const newPost = {
    username: username,
    title: title,
    content: content
};

const blogPosts = JSON.parse(localStorage.getItem('blog-posts')) || [];
blogPosts.push(newPost);
localStorage.setItem('blog-posts', JSON.stringify(blogPosts));
localStorage.setItem('formData', JSON.stringify(newPost));
window.location.href = 'blog.html';

}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

document.querySelector('form').addEventListener('submit', handleFormSubmission);
