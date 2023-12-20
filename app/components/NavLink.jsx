import React from "react";
import Link from "next/link";

const NavLink = ( {href, title}) => {
    return (
<Link href={href}
className="block py-2 pl-3 pr-4 text-4xl text-white">
{title}
</Link>
    )
}

export default NavLink