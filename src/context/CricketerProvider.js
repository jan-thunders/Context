
import React,{useState} from "react";
import cricketContext from "./CricketContext";

const CricketerProvider = (props) =>{
    const [cricketer, setCricketer] = useState({
        name:"Sachin Tendulkar",
        age:47,
        country:"India",
        retired:true
    })
    

    return(
        <cricketContext.Provider value={{
            cricketer: cricketer,
            setCricketer: setCricketer
        }}>
              {props.children}
        </cricketContext.Provider>
    )

}

export default CricketerProvider;


/* 

"Sachin Tendulkar"


*/

