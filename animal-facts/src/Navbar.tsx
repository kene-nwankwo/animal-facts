import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from "@mui/material"


export default function Navbar() {
    const path = window.location.pathname

    return <nav className="nav">
        <Button><Link to='/' className="site-title">Animal Facts</Link></Button>
        <ul>
            <CustomLink to="/CatFact">Cat Fact</CustomLink>
            <CustomLink to="/DogFact">Dog Fact</CustomLink>
            <CustomLink to="/CatPicture">Cat Picture</CustomLink>
            <CustomLink to="/DogPicture">Dog Picture</CustomLink>
            <CustomLink to="/FaceName">Face and Name</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }: {to:any, children:any}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname , end: true})
    return(
        <Button className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </Button>
    )
}