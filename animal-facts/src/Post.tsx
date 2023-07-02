import { url } from "inspector"
import ReactDom from 'react-dom/client'
import React, { useEffect, useState } from 'react';

export default function Post({ arrayProp }: any) {
    const [myAns, setMyAns] = useState('');
    let url = arrayProp[0]
    
    

    useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.data["0"]);
        const updatedVariable =data.data["0"];
        setMyAns(updatedVariable);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);

    if (arrayProp[1] === "text"){

    return (
        <h1>{myAns}</h1>
    )}
    
    return (
        <h1>Test</h1>
    )

}