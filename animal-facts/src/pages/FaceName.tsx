import React, { useEffect, useState } from 'react';
export default function FaceName(){
    const url1 = "https://thispersondoesnotexist.com/"
    const url2 = "https://randomuser.me/api/"

    return (<><h1>Person and Name</h1>
    <PostImage url={url1} />
    <PostText url={url2} />
    </>)
}

function PostImage({ url }: any) {
    const [myAns, setMyAns] = useState('');

    const fetchPosts = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyAns(data.url);
 //           console.log(data.url)
        })
        .catch(error => console.log("ERROR"))
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
    <img src={url} className="animal_image"></img>
    )
}


function PostText({ url }: any) {
    const [myAns, setMyAns] = useState('');

    const fetchPosts = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyAns(data.results[0].name.first + " " + data.results[0].name.last);
 //           console.log(data.results[0].name.first + " " + data.results[0].name.last);
        })
        .catch(error => console.log("ERROR"))
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
    <h3>{myAns}</h3>
    )
}