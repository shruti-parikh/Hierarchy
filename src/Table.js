import { useState, useEffect } from "react";
import InnerComponent from "./InnerComponent";
import './Table.css'

export default function Table(props) {

    // const getData = async (jnum)=>
    // {

    //     const response = await axios.get(`https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/${jnum}.json`)
    //     const resp = response.data
    //     // console.log(resp)
    //     nodeList[jnum] = resp.title
    //     console.log(nodeList)
    // }

    return (
        // <p>{props.data}</p>
        <>
            {props.data.map((item) => (
            <ul>
                <li>{item.title}
                <ul>
                    {/* {item.type == "container" ? <li>{other(item.idref)}</li>  : <Table data={item.children}/>} */}
                    {/*  */}
                    {item.type === "container" ? <Table data={item.children}/> : <InnerComponent jnum={item.idref} /> }
                    {/* {item.type === "container" ? <Table data={item.children} nodes = {nodeList | {}} />: <li>{getData(item.idref)}</li>} */}
                </ul>
                </li>
            </ul>
            ))}
        </>
    );
  }


// https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/2558.json