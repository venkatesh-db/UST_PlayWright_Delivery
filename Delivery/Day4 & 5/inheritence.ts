

/*

       Mother  face                 Grand Pappa       Habbit --> helping  Methods


        ||                         ||



        Son    face             Father                 Habbit --> helping   Methods 


                                    ||


                                    Son     
*/ 



// Inherietence


class Mother 
{
   
 faceshape = "look"

}

class  son extends Mother {


}


const venkatesh = new son();
console.log(venkatesh.faceshape)


// Ploymporhsirm 


class GrandPappa
{

     village :number 

    helping()
    {
           this.village = 1000
    }
}

class father extends GrandPappa
{

     education:number

     helping()
    { 

         this.education = 100000
        console.log(this.education)

    }
    
}

const akash=new father();
akash.helping();