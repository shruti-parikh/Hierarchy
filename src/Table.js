import { useState, useEffect } from "react";
import InnerComponent from "./InnerComponent";
import './Table.css'

export default function Table(props) {
    
    return (
        // <p>{props.data}</p>
        <div>
            {props.data.map((item) => (
            <ul>
                <li>{item.title}
                <ul>
                    {/* {item.type == "container" ? <li>{other(item.idref)}</li>  : <Table data={item.children}/>} */}
                    {item.children.length > 0 ? <Table data={item.children}/> : <InnerComponent j={item.idref} />}
                </ul>
                </li>
            </ul>
            ))}
        </div>
    );
  }


// https://raw.githubusercontent.com/shruti-parikh/BooleanLogicData/main/export_01_boolean_logic/2558.json