
function getFact(){
    fetch("https://meowfacts.herokuapp.com/")
    .then(res => console.log(res))
}

export default function Home(){
    return (
    <div>
        <h1>Welcome to Animal Facts</h1>
        <h2>Click on the Nav bar to see random animal fact or pictures.</h2>
    </div>
    )
}