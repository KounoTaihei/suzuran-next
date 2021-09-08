import Image from 'next/image';
import HomeIcon from '../public/fake.webp';
import AboutIcon from '../public/fake.webp';
import ChirashiIcon from '../public/fake.webp';
import QuestionIcon from '../public/fake.webp';
import ContactIcon from '../public/fake.webp';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/dist/client/router';

const Nav = () => {
    const router = useRouter();

    const items = [
        // トップ
        {
            image: HomeIcon,
            text: '教室について',
            link: '/'
        },
        // コース紹介、料金体系ページ
        {
            image: AboutIcon,
            text: 'コース紹介、レッスン料金など',
            link: '/about'
        },
        // ちらし作成、映像作成ページ
        {
            image: ChirashiIcon,
            text: 'ちらし・映像など作成します',
            link: '/make'
        },
        // Q & A ページ
        {
            image: QuestionIcon,
            text: 'よくある質問',
            link: '/questions'
        },
        // お問い合わせ
        {
            image: ContactIcon,
            text: 'お問い合わせ',
            link: '/contact'
        }
    ];


    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_items}>
                {items.map(item =>
                    <li key={item.text} className={styles.nav_item}>
                        <Link href={item.link}>
                            <a className={styles.nav_link}>
                                <Image src={item.image} className={styles.nav_img} width={25} height={25} />
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