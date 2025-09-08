
/*
// Data types 

let names:string ="ust smiles"
let smiles:number = 10 
let wfh:boolean = true;
console.log(names)


let holdiay ="onam" // string 

let generic:any = "smiles" // string --> any
generic=45.67
console.log(generic)


let project:any = "playwright testing"
project = false
console.log(project)


*/


// plan to go to movie  - buy ticket 

function mondaydelivery(){
 
let names:string ="monday  delivery"
let smiles:number = 10 
let wfh:boolean = true;
console.log(names)

let holdiay ="onam" // string 
let generic:any = "smiles" // string --> any
generic=55.67
console.log(generic) //  55.67 pass to output 

}

//mondaydelivery()  // go to theatre experienced the movie step by step 


function workingdays( weekdays:string ,weekend?:string , holiday:string ="onam"  ) : any{

    console.log(weekdays)
    console.log(weekend)
    console.log(holiday)

}

workingdays( "m-wed", "sept festival" )                             // mainisha 
//              weedays   weekeend     
workingdays("m-f"," ", " ")                                         //  venkatesh
workingdays("m-f","satursay-sunday","christams")                  //   akash

console.log(undefined)


//arraow function --> 1 line of reusable code 
const workingdayss= (weekdays:string ,weekend?:string  ) =>  console.log("arrow functions " + weekdays )


workingdayss("m-wed", "sept festival" )  // arrao function passing data 


//arraow function --> 3 line of reusable code 
const smilingustteam=(weekdays:string ,weekend?:string , holiday:string ="onam" ):any=>{

        console.log("multiline arrow functionn "+ weekdays)
        console.log(weekend)
        console.log(holiday)
        return weekdays
}


smilingustteam("m-f","satursay-sunday","christams") 


function connecttodb() : (string | any) {

    return "smiles"

}

let retrunvalue :any = connecttodb()
console.log(retrunvalue)


const happiness =(n:string):string => "venkatesh" + n

let retrunvalues :any = happiness("smilesday3")
console.log(retrunvalues)



function automotion(nameconflict:string):string ;
function automotion(nameconflict:number):string ;

function automotion(nameconflict : string | number ):string {

    if (typeof nameconflict == "number"  ){

           return nameconflict.toFixed(2)  //  6 number- -->  "6.00" 
    }

    return "best performer"
}

let rest=automotion("mahesh")
console.log(rest)

let rests=automotion(6)
console.log(rests)


let mindset : string | number ;

mindset= "positivie"
mindset=7
