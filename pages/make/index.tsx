import styles from '../../styles/Make.module.scss';
import Image from 'next/image';
import chirashiImage_1 from '../../public/chirashi2021.7-01.png';
import chirashiImage_2 from '../../public/chirashi2021.7-02.png';
import Content from '../../components/content';
import { ids } from '../../libs/ids';
import YouTube from 'react-youtube';
import { Meta } from '../../components/meta';

const Make = () => {
    const Chirashi = () => {
        const text = (
            <div className={styles.wrapper}>
                <p className="bold_font">無料見積いたします。ご相談ください。</p>
                <p>↓すずらんのちらしです</p>
                <div className={styles.image_field}>
                    <div className={styles.image_wrapper}>
                        <span>（表）</span>
                        <Image src={chirashiImage_1} alt="すずらんのちらしの画像" width={700} height={500} loading="lazy" />
                    </div>
                    <div className={styles.image_wrapper}>
                        <span>（裏）</span>
                        <Image src={chirashiImage_2} alt="すずらんのちらしの画像の裏面" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
        );

        return (
            <>
                <Content
                    contentTitle="ちらし作成します"
                    text={text}
                    id={ids.make.chirashi}
                />
            </>
        )
    }

    const PrVideo = () => {

        const text = (
            <div className={styles.wrapper}>
                <p className="bold_font">無料見積いたします。ご相談ください。</p>
                <p>↓すずらんのPR映像です</p>
                <div className={styles.video}>
                    <YouTube videoId="6x9IsuEankk" className={styles.iframe} containerClassName={styles.youtube} />
                </div>
            </div>
        )

        return (
            <>
                <Content
                    contentTitle="PR映像作成します"
                    text={text}
                    id={ids.make.prvideo}
                />
            </>
        )
    }

    return (
        <>
            <Meta
                title="ちらし等作成します"
            />
            <div className={styles.make}>
                <Chirashi />
                <PrVideo />
            </div>
        </>
    )
}

export default Make;