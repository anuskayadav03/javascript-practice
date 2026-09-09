const fruits = [
    {name:"apple", color:"red",calories:95},
     {name:"orange", color:"orange",calories:135},
      {name:"mango", color:"yello",calories:225},
]
// fruits.splice(0,2);

// fruits.push({name:"grapes" , color:"green"});
// console.log(fruits);

fruits.forEach(fruit => console.log(fruit.name));