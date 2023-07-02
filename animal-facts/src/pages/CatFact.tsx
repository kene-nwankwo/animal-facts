import React, { useEffect, useState } from 'react';

export default function CatFact(){
    const url = "https://meowfacts.herokuapp.com/"

    return (<><h1>Cat Fact</h1>
    <PostText url={url} />
    </>)
}

function PostText({ url }: any) {
    const [myAns, setMyAns] = useState('');

    const fetchPosts = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyAns(data.data["0"]);
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