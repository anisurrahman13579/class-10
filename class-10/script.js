
  
  
   // const s1 = document.querySelector("#paragraph");


     // function test()
//{
   // alert("this is a clicked");

    // p.append("abc");   // append mane holo value add kora and insert at right.
   //  p.prepend("anisur rahman"); // age add hoya .
    // p.before("tnx");  //  purbe value bose.
   // p.after("after"); // pore value bose.
 //  s1.append("anisur rahman");

//}







  const h =  document.querySelectorAll("h1");
      


   for(let i =0; i<2; i++)
 {
   h[i].style.color="red";
  }


const mylist = document.querySelector("#myList");

  function createNew()
  {


    
    const node = document.createElement("li");
    const text =  document.createTextNode("Fourth");
    node.appendChild(text);

   mylist.appendChild(node);
  

     
  }
    

  function removeExisting()
  {
    mylist.removeChild(mylist.children[2]);
  }


    function remove(){
      
      mylist.removeChild(mylist.firstchild);

    }


      

    function remove()
    {
        const muli = document.querySelector("#muli");
      //  muli.removeChild(muli.lastChild);
       muli.removeChild(muli.children[0]);

     }




    function rf()
    {
       const s1 = document.querySelector("#fruits");
       s1.removeChild(s1.children[2]);
    }

  
  // h.innerHTML = "this is content";  // single er  khettre aita use kora hy.
 