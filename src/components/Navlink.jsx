"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navlink = ({href,children}) => {
    const path = usePathname()
    const isActive = href == path
    return (
        <Link href={href} className={`${isActive?"border-b border-b-mauve-700 p-3":""}`}>{children}</Link>
    );
};

export default Navlink;