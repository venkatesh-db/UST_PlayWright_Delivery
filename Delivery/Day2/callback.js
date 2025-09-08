

// function is impolmented ust 

function Ust_attendinterview( name , exp, hringstatus  ){  // hringstatus --> feedback

    // evlauation code 
    let technicalques=["typescript","callabck","asyncwait"]
    console.log(technicalques)

    let totalquestion=10
    let totalanswerrs=7

    // techncial panel is feedback 
    if (totalanswerrs < 7)
    {
      hringstatus("you to need improve coding")  // calling feedback functions
    }
    else if (totalanswerrs == 7)
    {
          hringstatus("consider")
    }
     else if (totalanswerrs == 9)
    {
        hringstatus("seleeted") 
    }
}

// venkatesh in interview i will define by end of interview 

function feedback( result){ // for candidate feedback

     console.log(result)

}

// myself venkatesh is attending interveiw at ust 
Ust_attendinterview( "venkatesh","16" ,feedback ) // venkatesh is cruious feedback interview


Ust_attendinterview( "venkatesh","16" ,(result) =>{   // closure or unnamed functions for feedback 

     console.log(result)
     
} ) // venkatesh is cruious feedback interview


/*
function feedback( result){ // for candidate feedback

     console.log(result)

}

( result)=>{

}
    */