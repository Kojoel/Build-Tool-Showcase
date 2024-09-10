import _ from 'lodash'; // External library (e.g., lodash)
import './styles.scss';

// Load JSON data
fetch('./tools.json')
  .then(response => response.json())
  .then(data => {
    const toolsList = document.getElementById('tools');
    toolsList.innerHTML = data.tools.map(tool => `<li>${tool.name}</li>`).join('');
  });

// Example use of Lodash
console.log(_.join(['Build', 'Tool', 'Showcase'], ' '));
