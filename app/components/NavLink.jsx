import React from "react";

const NavLink = ( {href, title}) => {
    return (
<Link href={href}
className="text-5xl text-white font-semibold">
{title}
</Link>
    )
}

export default NavLink