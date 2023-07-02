import Post from '../Post'
export default function CatFact(){
    const myArray = ["https://meowfacts.herokuapp.com/", "text"]

    return (<><h1>Cat Fact</h1>
    <Post arrayProp={myArray} />
    </>)
}