`use strict`;
const table = document.getElementById('table');
let operatingHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let storeLocations = []
function Store(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.total = 0;
  this.calcCookiesPerHour = [];
  this.calcCostumerPerHour = [];
  storeLocations.push(this);
}
Store.prototype.getNumberofCookiesSoldperHour = function () {
  for (let i = 0; i < operatingHrs.length; i++) {
    let sales = Math.floor(this.avgSale * this.getRandomNumberofCust());
    this.calcCookiesPerHour.push(sales);
  }
  
}

Store.prototype.getRandomNumberofCust = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
}

Store.prototype.render = function () {
  let storeTotal = 0
  
  
  let row = document.createElement('tr');
  table.appendChild(row);
  
  let td = document.createElement('td');
  td.textContent = this.location;
  row.appendChild(td);
  
  
  for (let i = 0; i < operatingHrs.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.calcCookiesPerHour[i];
    storeTotal += this.calcCookiesPerHour[i];
    row.appendChild(td);
  }
  
  let totalCell = document.createElement('td');
  totalCell.textContent = storeTotal;
  row.appendChild(totalCell);
}

headerRow();

const seattle = new Store('seattle', 23, 65, 6.3);
seattle.getNumberofCookiesSoldperHour();
seattle.render();


const tokyo = new Store('tokyo', 3, 24, 1.2);
tokyo.getNumberofCookiesSoldperHour();
tokyo.render();


const dubai = new Store('dubai', 11, 38, 3.7);
dubai.getNumberofCookiesSoldperHour();



const paris = new Store('paris', 20, 38, 2.3);
paris.getNumberofCookiesSoldperHour();
paris.render();


const lima = new Store('lima', 2, 16, 4.6);
lima.getNumberofCookiesSoldperHour();
lima.render();


function headerRow() {
  let row = document.createElement('tr');
  table.appendChild(row);
  let td = document.createElement('td');
  td.textContent = 'Location';
  row.appendChild(td);
  for (let i = 0; i < operatingHrs.length; i++) {
    let th1 = document.createElement('th');
    th1.textContent = operatingHrs[i];
    row.appendChild(th1);
  }
  let tdDailyTotal = document.createElement('td');
  tdDailyTotal.textContent = 'Daily Totals';
  row.appendChild(tdDailyTotal);
}
function footerRow() {
  let totalRow = document.createElement('tr');
  table.appendChild(totalRow);
  
  
  let TotalTd = document.createElement('td');
  TotalTd.textContent = "Totals";
  totalRow.appendChild(TotalTd);
  
  let grandTotal = 0
  
  for (let i = 0; i < operatingHrs.length; i++) {
    let hourlyTotal = 0
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotal += storeLocations[j].calcCookiesPerHour[i];
      grandTotal += hourlyTotal;
      console.log(grandTotal);
      console.log(hourlyTotal);
    }
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    totalRow.appendChild(hourlyTotalTd);
  }
    let grandTotalTd = document.createElement('td');
    grandTotalTd.textContent = grandTotal;
    totalRow.appendChild(grandTotalTd);
}




footerRow(); 