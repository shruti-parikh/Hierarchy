import { useState, useEffect } from "react";
import InnerComponent from "./InnerComponent";
import './Table.css'

export default function Table(props) {


    return (
        <>
            {props.data.map((item) => (
            <ul>
                <li>{item.title}
                    {item.type === "container" ? <Table data={item.children}/> : <InnerComponent jnum={item.idref} /> }
                </li>
            </ul>
            ))}
        </>
    );
  }
