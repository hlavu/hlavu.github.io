/* Add any JavaScript you need to this file. */
/*
  Name: HOANG LAN ANH VU
  Student ID: 137393195
  Email: hlavu@myseneca.ca
  Section: NEE
*/
var cakes = [
  {
    Name: 'Product 1',
    Description: 'Chocolate Cake with chocolate chip mascarpone filling',
    code: 'c1',
    Category: 'Chocolate',
    Price: '$60'
  },

  {
    Name: 'Product 1',
    Description: 'Green-tea Cake Layer, decorating with flowers',
    code: 'm1',
    Category: 'Green-tea',
    Price: '$90'
  },

  {
    Name: 'Product 2',
    Description: 'Naked Dark Chocolate Cake with cream cheese',
    code: 'c2',
    Category: 'Chocolate',
    Price: '$100'
  },

  {
    Name: 'Product 3',
    Description: 'No Bake Key Lime Pie',
    code: 'f3',
    Category: 'Fruit',
    Price: '$50'
  },

  {
    Name: 'Product 3',
    Description: 'Chocolate Raspberry Cake for Vegan',
    code: 'c3',
    Category: 'Chocolate',
    Price: '$100'
  },

  {
    Name: 'Product 4',
    Description: 'Peanut Butter Brownies with Chocolate Drizzle',
    code: 'c4',
    Category: 'Chocolate',
    Price: '$40'
  },

  {
    Name: 'Product 5',
    Description: 'Chocolate layer cake with cocoa whipped cream an berries',
    code: 'c5',
    Category: 'Chocolate',
    Price: '$55'
  },

  {
    Name: 'Product 1',
    Description: 'Strawberry mascarpone frosting cake',
    code: 'f1',
    Category: 'Fruit',
    Price: '$65'
  },

  {
    Name: 'Product 2',
    Description: 'Berry Chantilly Cake',
    code: 'f2',
    Category: 'Fruit',
    Price: '$55'
  },

  {
    Name: 'Product 4',
    Description: 'Strawberry Lemon Tart',
    code: 'f4',
    Category: 'Fruit',
    Price: '$50'
  },

  {
    Name: 'Product 5',
    Description: 'Blood Orange tart',
    code: 'f5',
    Category: 'Fruit',
    Price: '$45'
  },

  {
    Name: 'Product 3',
    Description: 'Green-tea Strawberry Cake',
    code: 'm3',
    Category: 'Green-tea',
    Price: '$60'
  },

  {
    Name: 'Product 2',
    Description: 'Vegan green-tea strawberry tart',
    code: 'm2',
    Category: 'Green-tea',
    Price: '$55'
  },

  {
    Name: 'Product 4',
    Description: 'Gluten-free and Vegan Matcha-Coconut Tart',
    code: 'm4',
    Category: 'Green-tea',
    Price: '$45'
  },

  {
    Name: 'Product 5',
    Description: 'Green-tea Flan Strawberry',
    code: 'm5',
    Category: 'Green-tea',
    Price: '$80'
  }
];

window.onload = function() {
  document.querySelector('#type1').setAttribute('href', '#');
  var type1 = document.querySelector('#type1');
  type1.addEventListener('click', updateSubtitle1);
  type1.addEventListener('click', showProduct1);

  document.querySelector('#type2').setAttribute('href', '#');
  var type2 = document.querySelector('#type2');
  type2.addEventListener('click', updateSubtitle2);
  type2.addEventListener('click', showProduct2);

  document.querySelector('#type3').setAttribute('href', '#');
  var type3 = document.querySelector('#type3');
  type3.addEventListener('click', updateSubtitle3);
  type3.addEventListener('click', showProduct3);
};

function updateSubtitle1() {
  document.title = 'Chocolate Cake';
  var main1 = document.querySelector('#home');
  main1.style.visibility = 'hidden';
  var main2 = document.querySelector('#display');
  main2.style.visibility = 'visible';
}

function updateSubtitle2() {
  document.title = 'Green Tea Cake';
  var main1 = document.querySelector('#home');
  main1.style.visibility = 'hidden';
  var main2 = document.querySelector('#display');
  main2.style.visibility = 'visible';
}

function updateSubtitle3() {
  document.title = 'Fruit Cake';
  var main1 = document.querySelector('#home');
  main1.style.visibility = 'hidden';
  var main2 = document.querySelector('#display');
  main2.style.visibility = 'visible';
}

//sort categories
function showProduct1() {
  var main = document.querySelector('#display');
  removeDiv(main);
  var text = document.createElement('h3');
  text.style.color = '#ba7967';
  text.style.fontFamily = 'myFont1';
  text.innerHTML = 'This is Chocolate section';
  main.appendChild(text);
  for (var i = 0; i < cakes.length; i++) {
    if (cakes[i].Category === 'Chocolate') {
      sortProduct(
        cakes[i].Name,
        cakes[i].Category,
        cakes[i].Description,
        cakes[i].code,
        cakes[i].Price
      );
    }
  }
}

function showProduct2() {
  var main = document.querySelector('#display');
  removeDiv(main);
  var text = document.createElement('h3');
  text.style.color = '#42b883';
  text.style.fontFamily = 'myFont1';
  text.innerHTML = 'This is Green-tea section';
  main.appendChild(text);
  for (var i = 0; i < cakes.length; i++) {
    if (cakes[i].Category === 'Green-tea') {
      sortProduct(
        cakes[i].Name,
        cakes[i].Category,
        cakes[i].Description,
        cakes[i].code,
        cakes[i].Price
      );
    }
  }
}

function showProduct3() {
  var main = document.querySelector('#display');
  removeDiv(main);
  var text = document.createElement('h3');
  text.style.fontFamily = 'myFont1';
  text.innerHTML = 'This is Fruit section';
  main.appendChild(text);
  for (var i = 0; i < cakes.length; i++) {
    if (cakes[i].Category === 'Fruit') {
      sortProduct(
        cakes[i].Name,
        cakes[i].Category,
        cakes[i].Description,
        cakes[i].code,
        cakes[i].Price
      );
    }
  }
}

// clear container body
function removeDiv(main) {
  main.innerHTML = '';
}

// sort and print out product images according to categories
function sortProduct(name, category, description, code, price) {
  var main = document.querySelector('#display');
  var fig = document.createElement('figure');
  var newImg = document.createElement('img');
  newImg.src = 'images/' + code + '.jpg';
  newImg.setAttribute('alt', newImg.src);
  newImg.setAttribute('onclick', 'imgView("images/' + code + 'b' + '.jpg")');
  fig.appendChild(newImg);
  var caption = document.createElement('figcaption');
  caption.innerHTML += 'Name: ' + name;
  fig.appendChild(caption);
  var newline = document.createElement('br');
  fig.appendChild(newline);
  caption.innerHTML += ', Category: ' + category;
  fig.appendChild(caption);
  fig.appendChild(newline);
  caption.innerHTML += ', Description: ' + description;
  fig.appendChild(caption);
  fig.appendChild(newline);
  caption.innerHTML += ', Price: ' + price;
  fig.appendChild(caption);
  fig.appendChild(newline);
  main.appendChild(fig);
}

var a = 1;
if (a < 0) {
  formValidation();
}

//form validation
function formValidation() {
  return validateName() && validateAddress() && validateMessage() && validateOrderNumber();
}

//validate name
function validateName() {
  var allAlpha = true;
  var elem = document.querySelector('#name');
  var inputValue = elem.value.trim();
  if (inputValue.length < 4) {
    allAlpha = false;
  }
  inputValue = inputValue.toUpperCase();

  for (var i = 0; i < inputValue.length; i++) {
    // check all characters are letters
    if (inputValue.charAt(i) < 'A' || inputValue.charAt(i) > 'Z') {
      allAlpha = false;
    }
  }

  if (!allAlpha) {
    if (inputValue.length < 4) {
      alert('Name : Must be minimum 4 letters'); // eslint-disable-line no-alert
    } else {
      alert('Name : Please enter a meaningful name with all alphabet letters.'); // eslint-disable-line no-alert
    }
    elem.focus();
    return false;
  }
  return true;
}

// validate address
function validateAddress() {
  var passAlpha = false;
  var passNum = false;
  var charString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numString = '0123456789';
  var inputValue = document.m_form.address.value.trim();

  for (var i = 0; i < inputValue.length; i++) {
    if (charString.indexOf(inputValue.substr(i, 1)) >= 0) passAlpha = true;
    if (numString.indexOf(inputValue.substr(i, 1)) >= 0) passNum = true;
  }
  if (!(passAlpha && passNum)) {
    alert('Address : Must combine letters and digits.'); // eslint-disable-line no-alert
    return false;
  }
  return true;
}

//validate message
function validateMessage() {
  var input = document.m_form.message.value.trim();
  if (input.length < 50) {
    alert('Message : Need to be more than 50 characters.'); // eslint-disable-line no-alert
    return false;
  }
  return true;
}

//validate order number
function validateOrderNumber() {
  var getCheck = document.querySelector('#checkYes');
  if (getCheck.checked) {
    var input = document.m_form.orderNumber.value.trim();
    if (input.length < 8) {
      alert('Order Number : You need to enter Order Number.'); // eslint-disable-line no-alert
      return false;
    }
  }

  return true;
}
