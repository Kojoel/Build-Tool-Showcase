import _ from 'lodash'; // External library (e.g., lodash)
import './styles.scss';
import tools from './tools.json';

const listContainer = document.querySelector('.list-container');

// tools.forEach(item => console.log(item.name))

// tools.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item.name;
//   console.log('this is from listed items' ,listItem)
//   listContainer.append(listItem);
// })

let toolsArray = tools;
listContainer.textContent = '';

for(let i=0; i < tools.length; i++) {
  const listItem = document.createElement('div');
  const desc = document.createElement('p');
  const image = document.createElement('img');

  listItem.setAttribute('class', 'content');
  desc.setAttribute('class', 'description');
  image.setAttribute('class', 'build-image');

  listItem.textContent = tools[i].name;
  desc.textContent = tools[i].description;
  image.src = tools[i].image;

  listItem.appendChild(image);
  console.log(image);
  listItem.appendChild(desc);
  listContainer.appendChild(listItem)
}

console.log(tools.length)
console.log(tools.image);
// console.log(listContainer)
