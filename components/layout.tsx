import { ReactChild, useEffect, useState } from "react";
import Header from "./header";
import Nav from "./nav";
import SideNav from './sidenav';
import Subcontent from "./subcontent";
import styles from '../styles/Main.module.scss';
import UnderImageField from "./underImage";
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }: Props) => {
    const [ scrolled, setScrolled ] = useState<boolean>(false);

    useEffect(() => {
        const scrollCheck = () => {
            if(1000 > window.scrollY) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        };
        window.addEventListener('scroll', scrollCheck, {
            capture: false,
            passive: true,
        });
        scrollCheck();

        return (() => {
            window.removeEventListener('scroll', scrollCheck);
        });
    },[])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Header />
            <Nav />
            <SideNav />
            <main className={styles.main}>
                <div className={styles.main_body}>
                    <div className={styles.main_content}>
                        {children}
                    </div>
                    <div className={styles.sub_content}>
                        <Subcontent />
                    </div>
                </div>
                <div className={scrolled ? `${styles.scroll} ${styles.active}` : styles.scroll} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faChevronUp} />
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