`use strict`;
let seattleStoreArr = [];
let operatingHrs= ['6am','7am','8am','9am','10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
const seattleStore = {
location: 'seattle',
minCust: 23,
maxCust: 65,
avgSale: 6.3,
total: 0,
getRandomNumberofCust: function(){
   return Math.random() * (this.maxCust - this.minCust) + this.minCust;
},
getNumberofCookiesSoldperHour: function(){
  for(let i=0;i<operatingHrs.length;i++){
    let sales= Math.floor(this.avgSale*this.getRandomNumberofCust());
    seattleStoreArr.push(sales)
  }
}
}

function getTotalSales(arr){
  let total=0
  for(let i=0;i<arr.length;i++){
    total+= arr[i]
  }
  return total
}

seattleStore.getNumberofCookiesSoldperHour();

const parentElement = document.getElementById('cookiesSold');

const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = seattleStore.location;
article.appendChild(h2);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < operatingHrs.length; i++) {
  const li = document.createElement('li');
  li.textContent = operatingHrs[i]+":"+seattleStoreArr[i];
  ul.appendChild(li);
}
const li = document.createElement('li');
li.textContent = `Total ${getTotalSales(seattleStoreArr)}`
ul.appendChild(li);


// THIS IS THE TOKYO STORE
let tokyoStoreArr = [];

const tokyoStore = {
location: 'tokyo',
minCust: 3,
maxCust: 24,
avgSale: 1.2,
total: 0,
getRandomNumberofCust: function(){
   return Math.random() * (this.maxCust - this.minCust) + this.minCust;
},
getNumberofCookiesSoldperHour: function(){
  for(let i=0;i<operatingHrs.length;i++){
    let sales= Math.floor(this.avgSale*this.getRandomNumberofCust());
    tokyoStoreArr.push(sales)
    
  }
}
}


tokyoStore.getNumberofCookiesSoldperHour();

console.log(tokyoStoreArr);
console.log(tokyoStore);

const articleTwo = document.createElement('article');
parentElement.appendChild(articleTwo);

const h2two = document.createElement('h2');
h2two.textContent = tokyoStore.location;
article.appendChild(h2two);

const ulTwo = document.createElement('ul');
article.appendChild(ulTwo);

for (let i = 0; i < operatingHrs.length; i++) {
  const li = document.createElement('li');
  li.textContent = operatingHrs[i]+":"+tokyoStoreArr[i];
  ulTwo.appendChild(li);
}
const liTwo = document.createElement('li');
liTwo.textContent = `Total ${getTotalSales(tokyoStoreArr)}`
ulTwo.appendChild(liTwo);



// THIS IS THE dubai STORE
let dubaiStoreArr = [];

const dubaiStore = {
location: 'dubai',
minCust: 3,
maxCust: 24,
avgSale: 1.2,
total: 0,
getRandomNumberofCust: function(){
   return Math.random() * (this.maxCust - this.minCust) + this.minCust;
},
getNumberofCookiesSoldperHour: function(){
  for(let i=0;i<operatingHrs.length;i++){
    let sales= Math.floor(this.avgSale*this.getRandomNumberofCust());
    dubaiStoreArr.push(sales)
    
  }
}
}


dubaiStore.getNumberofCookiesSoldperHour();

console.log(dubaiStoreArr);
console.log(dubaiStore);

const article3 = document.createElement('article');
parentElement.appendChild(article3);

const h23 = document.createElement('h2');
h23.textContent = dubaiStore.location;
article.appendChild(h23);

const ul3 = document.createElement('ul');
article.appendChild(ul3);

for (let i = 0; i < operatingHrs.length; i++) {
  const li = document.createElement('li');
  li.textContent = operatingHrs[i]+":"+dubaiStoreArr[i];
  ul3.appendChild(li);
}

const li3 = document.createElement('li');
li3.textContent = `Total ${getTotalSales(dubaiStoreArr)}`
ul3.appendChild(li3);


// THIS IS THE paris STORE
let parisStoreArr = [];

const parisStore = {
location: 'dubai',
minCust: 20,
maxCust: 38,
avgSale: 2.3,
total: 0,
getRandomNumberofCust: function(){
   return Math.random() * (this.maxCust - this.minCust) + this.minCust;
},
getNumberofCookiesSoldperHour: function(){
  for(let i=0;i<operatingHrs.length;i++){
    let sales= Math.floor(this.avgSale*this.getRandomNumberofCust());
    parisStoreArr.push(sales)
    
  }
}
}


parisStore.getNumberofCookiesSoldperHour();

console.log(parisStoreArr);
console.log(parisStore);

const article4 = document.createElement('article');
parentElement.appendChild(article4);

const h24 = document.createElement('h2');
h24.textContent = parisStore.location;
article.appendChild(h24);

const ul4 = document.createElement('ul');
article.appendChild(ul4);

for (let i = 0; i < operatingHrs.length; i++) {
  const li = document.createElement('li');
  li.textContent = operatingHrs[i]+":"+parisStoreArr[i];
  ul4.appendChild(li);
}

const li4 = document.createElement('li');
li4.textContent = `Total ${getTotalSales(dubaiStoreArr)}`
ul4.appendChild(li4);














