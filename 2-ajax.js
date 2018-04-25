/**
 *  1. XMLHttpRequest
 *  2. Sending a GET request
 *  3. Listening to state changes
 *  4. Handling AJAX response
 *  5. Aborting an AJAX request
 *  6. Including cookies in requests
 *  7. Sending a POST request
 */

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            const h1 = document.querySelector('h1');
            h1.textContent = response.title;
        } else {
            console.log('FAILED :(');
        }
    }
});

let file = null;
document.querySelector('input').addEventListener('change', function(e) {
    file = e.target.files[0];
});

const button = document.querySelector('button');

button.addEventListener('click', function() {
    const formData = new FormData();
    formData.set('title', 'JavaScript');
    formData.set('file', file, 'file.png');
    console.log(file);

    xhr.open('POST', 'https://endpoints.uncaughtexception.wtf/dc1f54ed17194014aea6d8a1c7c19a9f');
    xhr.send(formData);

    setTimeout(function() {
        xhr.abort();
    }, 1000);
});




$.ajax({
    type: 'POST',
    url: 'https://endpoints.uncaughtexception.wtf/dc1f54ed17194014aea6d8a1c7c19a9f',
    data: {

    },
    success: function(response) {

    },
    error: function(error) {

    }
});
