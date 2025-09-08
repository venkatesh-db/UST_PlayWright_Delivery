
function delay(ms){
 
 console.log("more orders")  // line 4

 return new Promise(resolve=>setTimeout(resolve,ms))
}

async function placeorder(food){
    console.log("prepare food")  // line 3
    await delay(20000)  
   console.log("delivery food")  // line 5

} 

async function foodorderprocess(){

    console.log("begin food order")   // Line 1
    
    await placeorder("biryani")       // Line 2 - wait 
    
    console.log("end food order")    // line 6
}

foodorderprocess()
