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
        value.push(array1) > -1
     
      }
let index = []

index.push(value.toString())




console.log(results.length);
console.log(index);


  });