import styles from '../../styles/Make.module.scss';
import Image from 'next/image';
import chirashiImage_1 from '../../public/003.png';
import chirashiImage_2 from '../../public/004.png';
import Content from '../../components/content';

const Make = () => {
    const Chirashi = () => {
        const text = (
            <div className={styles.wrapper}>
                <p className="bold_font">無料見積いたします。ご相談ください。</p>
                <p>↓すずらんのちらしです</p>
                <div className={styles.image_wrapper}>
                    <span>（表）</span>
                    <Image src={chirashiImage_1} width={700} height={500} loading="lazy" />
                </div>
                <div className={styles.image_wrapper}>
                    <span>（裏）</span>
                    <Image src={chirashiImage_2} width={700} height={500} loading="lazy" />
                </div>
            </div>
        );

        return (
            <>
                <Content
                    contentTitle="ちらし作成します"
                    text={text}
                />
            </>
        )
    }

    const PrVideo = () => {
        const text = (
            <div className={styles.wrapper}>
                <p className="bold_font">無料見積いたします。ご相談ください。</p>
                <p>↓すずらんのPR映像です</p>
                <div className={styles.image_wrapper}>
                    <Image src={chirashiImage_1} width={700} height={500} loading="lazy" />
                </div>
            </div>
        )

        return (
            <>
                <Content
                    contentTitle="PR映像作成します"
                    text={text}
                />
            </>
        )
    }

    return (
        <div className={styles.make}>
            <Chirashi />
            <PrVideo />
        </div>
    )
}

export default Make;