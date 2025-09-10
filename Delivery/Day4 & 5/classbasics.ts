
/*

                 TV         channel -1                       remote 

                 
                 |             |                           ||

                class         class attributes              Methods 


                      father     mother   sister
                      
                       ||         ||         || 
                      object     object     object 


            Write code
            
            1. reusablity 
            2. extendablity 
            3. Maintablity 
            4. design principle's 

            and reuse it for any family and guest 


*/


class TV
{

     channel :number = 0    // on TV  currents state of tv is 0 


     remote( ch:number)
     {
          this.channel =ch    // Current satte is 200 
     }

     livechannel()
     { 
           console.log(this.channel)    // reading current state of tv 
     }

}

let father = new TV();
father.remote(200)
father.livechannel()

let guest=new TV();
guest.remote(400)
guest.livechannel()