const fruits = [
    {name:"apple", color:"red",calories:95},
     {name:"orange", color:"orange",calories:135},
      {name:"mangp", color:"yello",calories:225},
]
fruits.splice(0,1);
console.log(fruits[0].name);

fruits.push({name:"grapes" , color:"green"});