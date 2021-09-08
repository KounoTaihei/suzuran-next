import Link from 'next/link';
import Image from 'next/image';
import headerImage from '../public/fake.webp';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/">
                    <h1 className={styles.h1}>
                        <Image
                            className={styles.logo}
                            src={headerImage}
                            alt="大分市の初心者向けパソコン教室のアイコン"
                            width={56}
                            height={56}
                        />
                    </h1>
                </Link>
            </nav>
        </div>
    )
}

export default Header;