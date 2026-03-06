import { useEffect, useState,useRef } from "react";


function Counter(){
    const [count,SetCount]=useState(0);

    let refCount=useRef(0);


    function inc(){
         //SetCount(count+1);
        refCount.current ++;
       
        

    }

    function dec(){
        // SetCount(count-1);

        refCount.current--;
        
    }

    useEffect(()=>{
        //console.log(count);
        console.log(refCount);
    },[]);





    return(
        <>
        <h2 className="m-5" >{refCount.current}</h2>
        <button className="mx-5 btn btn-primary" onClick={inc}>UP</button>
        <button className="mx-5 btn btn-primary" onClick={dec}>dec</button>
        <button className="btn btn-primary" onClick={()=>{SetCount(refCount.current)}}>Update</button>
        
        </>
    )
}

export default Counter;
