import Link from 'next/link';
import Image from 'next/image';
import headerImage from '../public/title-logo.png';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/" passHref>
                    <h1 className={styles.h1}>
                        <span className={styles.img_wrapper}>
                            <Image
                                className={styles.logo}
                                src={headerImage}
                                alt="大分市の初心者向けパソコン教室のアイコン"
                                height={42}
                                width={184}
                            />
                        </span>
                    </h1>
                </Link>
            </nav>
        </div>
    )
}

export default Header;