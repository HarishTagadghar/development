const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const value = []
 const words = ['Abandon' ,'Abased']
fs.createReadStream(__dirname + '/A.csv')
  .pipe(csv({
      delimiter: ','
  }))
  .on('data', (data) =>  results.push(data)
  
  )
  .on('end', () => {
   for (let i = 0; i < results.length; i++) {
        let array = Object.values(results[i])
       let array1 = array.map(el => el.split(" ")[0])
        value.push(array1) 
     
      }
let index = []
for (let i = 0; i < value.length; i++) {
    index.push(value[i].toString())
}
for (let i = 0; i < index.length; i++) {
for (let j = 0; j < words.length; j++) {
   if(words[j] == index[i]){
       console.log(index[i]);
       
   }   

}
}



// console.log(results.length);
// console.log(index);


  });