
let smilingfans=new Promise( ( reslove ,reject ) =>{

  let sucess =false 

   if (sucess )
   {
        reslove("after 5 years bilarines") // calling private funtion residing in then 
   }else {
        reject("failure next attemp")    // calling private function resdig in catch 
   }

} ); // create object and passing  private function  reslove --> call then reject -> catch


smilingfans
.then( result=>{console.log(result)} ) 
.catch(errror=>{console.log(errror)})
.finally(()=>{ console.log("awlays smiling")})

