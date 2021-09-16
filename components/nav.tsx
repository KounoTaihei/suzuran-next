import Image from 'next/image';
import HomeIcon from '../public/icon-home.png';
import AboutIcon from '../public/icon-aboutme.png';
import ChirashiIcon from '../public/icon-chirashi.png';
import QuestionIcon from '../public/icon-question.png';
import ContactIcon from '../public/icon-contact.png';
import HomeActiveIcon from '../public/icon-home_c.png';
import AboutActiveIcon from '../public/icon-aboutme_c.png';
import ChirashiActiveIcon from '../public/icon-chirashi_c.png';
import QuestionActiveIcon from '../public/icon-question_c.png';
import ContactActiveIcon from '../public/icon-contact_c.png';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/dist/client/router';

const Nav = () => {
    const router = useRouter();

    const items = [
        // トップ
        {
            image: HomeIcon,
            activeImage: HomeActiveIcon,
            text: '教室について',
            link: '/'
        },
        // コース紹介、料金体系ページ
        {
            image: AboutIcon,
            activeImage: AboutActiveIcon,
            text: 'コース紹介、レッスン料金など',
            link: '/about'
        },
        // ちらし作成、映像作成ページ
        {
            image: ChirashiIcon,
            activeImage: ChirashiActiveIcon,
            text: 'ちらし・映像など作成します',
            link: '/make'
        },
        // Q & A ページ
        {
            image: QuestionIcon,
            activeImage: QuestionActiveIcon,
            text: 'よくある質問',
            link: '/questions'
        },
        // お問い合わせ
        {
            image: ContactIcon,
            activeImage: ContactActiveIcon,
            text: 'お問い合わせ',
            link: '/contact'
        }
    ];


    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_items}>
                {items.map(item =>
                    <li key={item.text} className={router.pathname === item.link ? `${styles.nav_item} ${styles.active}` : styles.nav_item}>
                        <Link href={item.link} passHref>
                            <a className={styles.nav_link}>
                                <Image src={router.pathname === item.link ? item.activeImage : item.image} className={styles.nav_img} width={25} height={25} />
                                <p className={styles.nav_text}>&thinsp;{item.text}</p>
                            </a>
                        </Link>
                    </li>    
                )}
            </ul>
        </nav>
    )
}

export default Nav;