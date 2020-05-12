const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const value = []
 const words = ['Abandon' ,'Abased']
 let arrays = []
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
        arrays.push(array)
     
      }
let index = [];
let output = []
for (let i = 0; i < value.length; i++) {
    index.push(value[i].toString())
}
for (let i = 0; i < index.length; i++) {
for (let j = 0; j < words.length; j++) {
   if(words[j] == index[i]){
       output.push(i)
   }   

}
}

for ( i = 0 ; i< output.length ; i++){
 console.log(arrays[output[i]]);
 
}

// console.log(output.length);


// console.log(results.length);
// console.log(index);
// console.log(arrays.length);
// console.log(index.length);




  });