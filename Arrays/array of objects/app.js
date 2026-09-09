const fruits = [
    {name:"apple", color:"red",calories:95},
     {name:"orange", color:"orange",calories:135},
      {name:"mango", color:"yellow",calories:225},
]
// fruits.splice(0,2);

// fruits.push({name:"grapes" , color:"green"});
// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.name));

// const fruitsName = fruits.map(fruit => fruit.name);
// console.log(fruitsName);

const yellofruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellofruits);