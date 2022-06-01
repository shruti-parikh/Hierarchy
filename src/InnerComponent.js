import { useEffect, useState } from "react";
import {useAsync} from "react-async"

export default  function InnerComponent(props)
{
    // const [title,setTitle] = useState(undefined)
    const Other = async(j) => {
        let jsondata = await fetch('https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/'+j+'.json')
        // fetch('https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/'+j+'.json')
        // .then(response => response.json())
        // .then(data => 
        //     {
        //         console.log(data.title)
        //         return data.title
        //     } 
        // );
    
        var  innerdata = await jsondata.json()
        return innerdata.title


    }
    
    // console.log(innerdata)
    // const Other = innerdata.title  
    // console.log(Other)
    
        
        // // console.log(jsondata.json())
        // console.log(innerdata.title)
        // return innerdata.title

    
    // useEffect(()=>
    // {
    //     setTitle(Other(props.j))
    // },[])


    return (
        <div>{<li>{}</li>}</div>
        )
}