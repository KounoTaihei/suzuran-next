import { ReactChild } from "react";
import Header from "./header";
import Nav from "./nav";

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Nav />
            <main className="p-3">{children}</main>
        </>
    )
}

interface Props {
    children: ReactChild
}

export default Layout;