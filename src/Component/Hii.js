import { useContext } from "react";
 import cricketContext from "../context/CricketContext";

 const Hello = () =>{

     const {cricketer,setCricketer} = useContext(cricketContext)

    //  console.log(obj) 

     // obj.cricketer.name

     function updateSachinAge(){
          setCricketer({...cricketer, age: cricketer.age+1})
     }

    return(
        <div>
           <h1> Welcome {cricketer.name} </h1>
           <p> Age: {cricketer.age} </p> 
           <p> Country: {cricketer.country} </p>
           <p> Retired: {cricketer.retired?"Yes": "No"} </p>
           <button onClick={updateSachinAge}> Update Sachin Age</button>
                
           <hr />
        </div>
    )
 }

export default Hello;