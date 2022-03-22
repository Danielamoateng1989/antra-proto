
//Filter
const arrayOfNumbers = [50, 60, 70, 30, 90];
Array.prototype.filter = function (cb) {
  const filteredData = []; 

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filteredData.push(this[i]);
    }
  }
  return filteredData;
};

const data = arrayOfNumbers.filter(function (num) {
  if (num < 60 ) return num;
});

console.log(data); 


//map
const colors = ["Blue", "Red", "White", "black"];
Array.prototype.map = function (mp) {
const items = []
  
for (let i = 0; i < this.length; i++) {
    if (mp(this[i])) {
       items.push(this[i])
    }
  }

  return items;
};

const myColors = colors.map(function (text) {
  
    return text

});

console.log(myColors)


//some
Array.prototype.some = function (sm) {
  const someData = []; 

  for (let i = 0; i < this.length; i++) {
    if (sm(this[i])) {
      someData.push(this[i]);
    }
  }
  return someData;
};
const array = [50, 60, 70, 30, 90, 1, 6, 3];

const mySomeNumbers = array.some(function (element) {
  if (element % 2 === 0 ) return element;
});

console.log(mySomeNumbers); 



//every

Array.prototype.every = function (ev) {
  const everyData = []; 

  for (let i = 0; i < this.length; i++) {
    if (ev(this[i])) {
      everyData.push(this[i]);
    } 
  }
  return everyData;
};

const everyArray = ["green", "orange", "purple", "rebeccapurple", "red"];

const myEveryArray = everyArray.every(function (element) {
  if (element.length < 4) return element;
});

console.log(myEveryArray)

//reduce
Array.prototype.reduce = function() {
    let total = 0;
    
    for(let i = 0 ; i < this.length; i++){
       total+=this[i]        
    }
  return total;
}
const reduceArr = [4, 5, 6, 7]
const sum = reduceArr.reduce(reduceArr)
console.log(sum)