/**
 *  1. Selecting elements
 *  2. Navigating the DOM tree
 *  3. Manipulating elements
 *  4. Inserting new elements
 *  5. Removing elements
 *  6. Listening to events
 *  7. Interacting with elements
 *  8. Event delegation
 */

// 1. Selecting elements
const h1 = document.querySelector('.title');
const p = document.querySelectorAll('p');

// 2. Navigating the DOM tree
const body = h1.parentNode;

// console.log(body.children);
// console.log(body.firstElementChild);
// console.log(body.lastElementChild);

// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

// 3. Manipulating elements
// h1.textContent = '<strong>HELLO WORLD!!!</strong>';
h1.innerHTML = '<i>HELLO WORLD</i>';

h1.classList.add('another-class');
h1.classList.remove('title');
h1.classList.toggle('title');

// h1.style.color = 'red';
// h1.style.fontSize = '100px';

// 4. Inserting elements
// const span = document.createElement('span');
// span.textContent = 'Good morning!';
// h1.insertBefore(span, h1.firstElementChild);

// const bye = document.createElement('span');
// bye.textContent = 'Bye World!';

// h1.insertAdjacentElement('afterend', bye);

// 5. Removing elements

h1.parentNode.removeChild(h1);
h1.remove();

// 6. Listening to events

// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     console.log('hello');
// });

// function handleButtonClick() {
//     console.log('world');
// }

// button.addEventListener('click',handleButtonClick);
// button.removeEventListener('click', handleButtonClick);

// 7. Interacting with elements

// button.click();

// 8. Event delegation

const div = document.querySelector('div');

div.addEventListener('click', function(event) {
    if (event.target.matches('.me-only')) {
        console.log('YOU CLICKED ON A BUTTON!!!');
    }
});
