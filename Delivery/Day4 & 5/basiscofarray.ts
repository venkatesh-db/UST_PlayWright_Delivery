

// Grow data  

let smilesmonths:number[] = [ 5,7,10,15,25,7,8]  // 7 element's -same type

smilesmonths.push(100) // 8 element - 100 

console.log(smilesmonths)


smilesmonths[0] = 10      //  changing index 0 value - 10 
console.log(smilesmonths)


let prayer:[string,number,string] = ["great hike",10.0,"next apprisal"]  // 3 elememnts - different type fixed size 
                               
console.log(prayer)

prayer[1]= 8
console.log(prayer)

prayer.push("venkatesh",7.0,"promotion")
console.log(prayer)


let resposne:[string,number] = ["ok",200]


for ( const items of resposne ){ // get value from tuple index - 0 , 1  
     console.log(items)
}

for ( const i of smilesmonths ){ //step 1 --> 1 -->value   unable to fetch stop loop  fethc value --> step 2

     console.log(i)  //step 2 

} // step 1 

for (let i =0;i<prayer.length;i++){
//  step 1      step 2         step4 --> step2 


         console.log(prayer[i]) // step 3 
} // step 4 