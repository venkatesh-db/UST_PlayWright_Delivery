
class User
{

    id : number 
    name : string 
    email : string

    posts:Post[]=[];  // i want to store object name or huamn anme who are posting 


   constructor( ids:number ,n:string , e:string  )
   {

    console.log(" user cosntructor ")

     // copy variable data inside object variables

     this.id = ids
     this.name = n
     this.email =e

   }

   createpost( content:string) :Post// dependecny with class Post
   {
   

    console.log("createpost ")
 
    // object to class post class 
   
      const akash = new Post(1, content , new Date("2025-9-10"))  

      this.posts.push(akash)  // append object to array

      console.log(this.posts)

      return akash 
   }

   likepost()  // dependecny with class like
   {

   }
}


class  Post  // extends User
{

   static id=1

   commments:Commnet[] =[];        // i want to store object name or huamn anme who are comenting  
   likes:Like[]=[];                //  i want to store object name or huamn anme who are liking   

    id:number
    content:string 
    createdat:Date 

    
   constructor( ids:number ,c:string , ct:Date  )
   {

    console.log("constructor post ")

   //  super(1 , "venkatesh","venkatesh.db@gmail.com") // call user constructore 

     // copy variable data inside object variables

     this.id = ids
     this.content = c
     this.createdat =ct

      Post.id = Post.id +1   // new content is crreated it will increment value of 

   }

   static nextid(){

    return this.id++; // count of current post 
   
  }


    addcomment(commnet:Commnet )   // method depeendcny with class Commnet
    {

       this.commments.push(commnet)
    }

    addlike( like:Like)         // method depeendcny with class Like
    {

        this.likes.push(like)
    }
}


/*
const venkatesh1 = new Post(2, " all are loving typescripyt -ust data smiles",new Date("2025-9-10"))

// object  --> post +user  --> overhead  memory 

venkatesh1.addcomment()

*/

//venkatesh1.likepost()

// object  -->  user + address --->  post   -->  aggragtion 


class Commnet 
{

id :number 
content:string



constructor( i:number , co:string ){

    this.content =co
    this.id = i

}


}


class Like 
{

    id:number
    createdAt:string

    constructor( i:number , co:string ){

    this.id =i
    this.createdAt = co

}

}



/*

         venkatesh     akash-->        akash

           ||                           ||

           User        array           post


*/


const venkatesh = new User(1,"venkatesh","venkatesh.db@gmail.com")  // When object is created is constructor eis invoked 

const akash=venkatesh.createpost(" all are loving typescript -ust data smiles")

akash.addcomment(new Commnet(2,"nice post-akhil",))  //    akhil is comments 

akash.addlike(new Like(1,"manisha"))                  //    manisha object 

console.log(akash)
