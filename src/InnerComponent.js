
import { useState,useEffect } from 'react';

export default function InnerComponent(props)
{
    const [data,setData] = useState()
    const submit =()=>
    {
        fetch(`https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/${props.jnum}.json`)
        .then(response => response.json())
        .then(data => 
            {
                setData(data)
            } 
        );
    }
    
    useEffect(()=>{
        submit()
      },[])
    
      return(
        <div> {data && <a href ="#">{data.title}</a>}</div>
    )
}