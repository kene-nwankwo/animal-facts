import React, { useEffect, useState } from 'react';
export default function CatPicture(){
    const url = "https://cataas.com/cat"

    return (<><h1>Cat Picture</h1>
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
//            console.log(data.url)
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