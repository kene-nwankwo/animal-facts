import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    const path = window.location.pathname

    return <nav className="nav">
        <Link to='/' className="site-title">Animal Facts</Link>
        <ul>
            <CustomLink to="/CatFact">Cat Fact</CustomLink>
            <CustomLink to="/DogFact">Dog Fact</CustomLink>
            <CustomLink to="/CatPicture">Cat Picture</CustomLink>
            <CustomLink to="/DogPicture">Dog Picture</CustomLink>
            <CustomLink to="/ZooAnimalFact">Zoo Animal Fact</CustomLink>
            <CustomLink to="/ZooAnimalPicture">Zoo Animal Picture</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }: {to:any, children:any}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname , end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}