


// 'https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/'+j+'.json'
// const Other = ({ id }) => {
//     // const { data, error } = useFetch('https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/'+id.id+'.json')
//     fetch('https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/'+id+'.json')
//     .then(response => response.json())
//     .then(data => 
//         {
//             console.log(data.title)
//             return <li>data.title</li>
//         } )
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
                // console.log(data.children.length)
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