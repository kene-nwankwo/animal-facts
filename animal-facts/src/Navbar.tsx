export default function Navbar() {
    const path = window.location.pathname

    return <nav className="nav">
        <a href='/' className="site-title">Site Name-Link to HomePage</a>
        <ul>
            <CustomLink href="/pricing">Pricing</CustomLink>
            <CustomLink href="/about">About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }: {href:any, children:any}) {
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}