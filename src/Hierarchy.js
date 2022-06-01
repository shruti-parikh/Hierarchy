import { useState,useEffect } from "react";
import Table from "./Table";

export default function Hierarchy()
{
    var[hierarchy,setHierarchy] = useState()

    const submit =()=>
    {
        fetch('https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/_hierarchy.json')
        .then(response => response.json())
        .then(data => 
            {
                // console.log(data.children.length)
                setHierarchy(data)
            } 
        );
    }
    
    useEffect(()=>{
        submit()
      },[])
    
    return(
        <div> {hierarchy && <Table data={hierarchy.children}/>}</div>
    )
}