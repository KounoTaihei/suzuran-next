import { ids } from "../libs/ids";
import styles from "../styles/SideNav.module.scss";
import Image from 'next/image';
import HomeImage from '../public/icon-home.png';
import AboutImage from '../public/icon-aboutme.png';
import MakeImage from '../public/icon-chirashi.png';
import QuestionsImage from '../public/icon-question.png';
import ContactImage from '../public/icon-contact.png';
import headerImage from '../public/title-logo.png';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronCircleRight, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const SideNav = () => {
    const [ open, setOpen ] = useState<boolean>(false);
    const [ accordion, setAccordion ] = useState<number>(0);
    const [ scrolled, setScrolled ] = useState<boolean>(false);

    useEffect(() => {
        if(document.getElementById('underimage')) {
            if(open) {
                document.getElementById('underimage')!.style.opacity = "1";
            } else {
                document.getElementById('underimage')!.style.opacity = "0.1";
            }
        }
    },[open])

    useEffect(() => {
        const scrollCheck = () => {
            if(36 > window.scrollY) {
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

    const items: Item[] = [
        {
            heading: "トップページ",
            headingPath: "/",
            image: HomeImage,
            childlen: [
                {
                    text: "教室の紹介",
                    id: ids.home.shoukai
                },
                {
                    text: "教室の特徴",
                    id: ids.home.tokuchou
                },
                {
                    text: "インストラクター紹介",
                    id: ids.home.instructor
                }
            ]
        },
        {
            heading: "教室について",
            headingPath: "/about",
            image: AboutImage,
            childlen: [
                {
                    text: "コース紹介",
                    id: ids.about.course
                },
                {
                    text: "料金体系",
                    id: ids.about.fee
                },
                {
                    text: "時間割",
                    id: ids.about.timetable
                }
            ]
        },
        {
            heading: "作成します",
            headingPath: "/make",
            image: MakeImage,
            childlen: [
                {
                    text: "ちらし作成します",
                    id: ids.make.chirashi
                },
                {
                    text: "PR映像作成します",
                    id: ids.make.prvideo
                }
            ]
        },
        {
            heading: "よくある質問",
            headingPath: "/questions",
            image: QuestionsImage,
            childlen: [
                {
                    text: "Q & A",
                    id: ids.questions.questions
                }
            ]
        },
        {
            heading: "お問い合わせ",
            headingPath: "/contact",
            image: ContactImage,
            childlen: [
                {
                    text: "お問い合わせ",
                    id: ids.contact.contact
                }
            ]
        }
    ];

    return (
        <>
            <div className={open ? `${styles.toggle_button} ${styles.open}` : styles.toggle_button} onClick={() => setOpen(!open)}>
                {!open && (
                    <div className={scrolled ? styles.scrolled : ""}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                )}
                {open && <FontAwesomeIcon icon={faTimes} />}
            </div>
            <div className={open ? `${styles.overlay} ${styles.open}` : styles.overlay} onClick={() => setOpen(false)}></div>
            <nav className={open ? `${styles.sidenav} ${styles.open}` : styles.sidenav}>
                <div className={styles.img_wrapper}>
                    <Image src={headerImage} height={42} width={184} loading="lazy" />
                </div>
                <div className={styles.link_wrapper}>
                    {items.map((item, i) =>
                        <div key={item.heading}>
                            <div
                                className={styles.nav_heading}
                                onClick={() => {
                                    if(accordion === i + 1) {
                                        setAccordion(0);
                                    } else {
                                        setAccordion(i + 1);
                                    }
                                }}
                            >
                                <div className={styles.nav_heading_body}>
                                    <Image src={item.image} loading="lazy" width={30} height={30} />
                                    <div className={styles.heading_text}>                                
                                        {item.heading}
                                    </div>
                                </div>
                                <div className={accordion === i + 1 ? `${styles.nav_heading_btn} ${styles.open}` : styles.nav_heading_btn}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className={accordion === i + 1 ? `${styles.accordion} ${styles.open}` : styles.accordion}>
                                {item.childlen.map(child =>
                                    <div key={child.id} className={styles.links}>
                                        <Link href={`${item.headingPath}#${child.id}`} passHref>
                                            <a className={styles.link} onClick={() => setOpen(false)}>
                                                <span className={styles.icon_wrapper}>
                                                    <FontAwesomeIcon icon={faChevronCircleRight} />
                                                </span>
                                                {child.text}
                                            </a>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>    
                    )}
                </div>
            </nav>
        </>
    )
}

export default SideNav;

interface Item {
    heading: string
    headingPath: string
    image: StaticImageData
    childlen: Child[]
}

interface Child {
    text: string
    id: string
}