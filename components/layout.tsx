import { ReactChild } from "react";
import Header from "./header";
import Nav from "./nav";
import Subcontent from "./subcontent";
import styles from '../styles/Main.module.scss';
import UnderImageField from "./underImage";

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Nav />
            <main className={styles.main}>
                <div className={styles.main_body}>
                    <div className={styles.main_content}>
                        {children}
                    </div>
                    <div className={styles.sub_content}>
                        <Subcontent />
                    </div>
                </div>
            </main>
            <UnderImageField />
        </>
    )
}

interface Props {
    children: ReactChild
}

export default Layout;