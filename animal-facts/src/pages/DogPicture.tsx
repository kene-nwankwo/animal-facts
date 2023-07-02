import React, { useEffect, useState } from 'react';
export default function DogPicture(){
    const url = "https://random.dog/woof.json"

    return (<><h1>Dog Picture</h1>
    <PostImage url={url} />
    </>)
}

function PostImage({ url }: any) {
    const [myAns, setMyAns] = useState('');

    const fetchPosts = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
        setMyAns(data.url);
        })
        .catch(error => console.log("ERROR"))
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
    <img src={myAns} className="animal_image"></img>
    )
}