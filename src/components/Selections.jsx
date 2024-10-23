import React from 'react'
 import CardGrid from './CardGrid'
const data=[{name:"Sushant",father_name:"Dhrambir",imageUrl:"https://firebasestorage.googleapis.com/v0/b/dalanwas-610db.appspot.com/o/hero.png?alt=media&token=27e76922-4b70-44ae-b424-e980c7bbe01c",post:"Gram sachive",year:2024},{name:'Rohit Arad',father_name:"Jaiprakash",imageUrl:"https://firebasestorage.googleapis.com/v0/b/dalanwas-610db.appspot.com/o/hero.png?alt=media&token=27e76922-4b70-44ae-b424-e980c7bbe01c",post:"Haryana police",year:2024},{name:"Mukesh",father_name:"jaiprakash",imageUrl:"https://firebasestorage.googleapis.com/v0/b/dalanwas-610db.appspot.com/o/hero.png?alt=media&token=27e76922-4b70-44ae-b424-e980c7bbe01c",post:"haryana police",year:2024},
  
]



function Selections() {
  return (
   <CardGrid data={data}/>
  )
}

export default Selections