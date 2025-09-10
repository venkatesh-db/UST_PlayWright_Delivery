

type  apiresposne=[string,number]

// Alis name  for data type tuple apiresposne  -->[string,number]

function fetchapi(): apiresposne { 

    return ["sucess-api",200]
}

let retvalue=fetchapi()
console.log(retvalue)

 
const dbusers: [string,number] [] = [  ["venkat",22],["mahesh",21]   ] 

// array of tuple objects --> [] [string,number]

console.log(dbusers.length)

for ( const i of dbusers) { // each ieration will get one tuple object 
   console.log(i)
}


//           book ticket's                 Many movie theatre 

//             interface                  -->all theartre agrred  to  work with same interface       

//        customer   venkatesh --> book ticket  --> interface  pvr local theatre 


interface ustbilling{

    projectname : string,
    perhour: number
}  // to tell a type  string , number to 



let devteam :ustbilling = {projectname :"dev team" , perhour:20000  }
// devteam object  for types   string , number


let teams: ustbilling[] = [ {  projectname :"playwright automation" , perhour:10000 }]

console.log(teams)