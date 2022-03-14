console.log('Hey from script');

// console.log(document.childNodes[1].childNodes[2].childNodes[0]);
// const number1 = prompt('Please enter your first number : ');
// const number2 = prompt('Please enter your second number : ');

// alert(parseInt(number1) + parseInt(number2));

// const message = document.querySelector('#welcome');
// const posts = document.querySelectorAll('.post');
// console.log(message);
// console.log(posts);

// const message = document.getElementById('welcome');
// const posts = document.getElementsByClassName('post');
// message.classList.add('red');
// console.log(message);
// console.log(posts);

// const button = document.getElementById('hello-button');
// const text = document.getElementById('hello-text');

// function handleButtonClick(e) {
//   if (e.target.value == 'Welcome Message') {
//     button.value = 'GoodBye Message';
//     alert('Goodbye ' + text.value);
//   } else {
//     button.value = 'Welcome Message';
//     alert('Welcome ' + text.value);
//   }
// }

// function handleText(e) {
//   console.log(e.key);
// }

// button.addEventListener('click', handleButtonClick);

// text.addEventListener('keypress', handleText);

// const number1 = document.getElementById('first-number');
// const number2 = document.getElementById('second-number');
// const button = document.getElementById('result-button');
// const result = document.getElementById('result');

// const handleClick = () => {
//   const valueNumber1 = Number(number1.value);
//   const valueNumber2 = Number(number2.value);
//   result.innerText += valueNumber1 + valueNumber2;
// };

// button.addEventListener('click', handleClick);

// const user = {
//   username: 'saleh',
//   password: '123456',
//   role: 'admin',
//   name: {
//     firstName: 'saleh',
//     lastName: 'alibrahim',
//     jobs: [
//       {
//         name: 'teaching',
//         salary: 9000000,
//       },
//       {
//         name: 'playing',
//         salary: 5000,
//       },
//       (msg) => {
//         console.log('Hey from ' + msg);
//       },
//     ],
//   },
// };

// const jsonUser = JSON.stringify(user);
// console.log(jsonUser.username);
// const userObject = JSON.parse(jsonUser);
// console.log(userObject.username);

// const postBody = document.getElementById('data');

// const main = async () => {
//   try {
//     const data = await fetch('https://www.google.com');

//     const result = await data.json();

//     console.log(result[0]);

//     const resultData = result.map((item) => item.body);

//     postBody.innerHTML = resultData;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();
// console.log('Hey from main');
