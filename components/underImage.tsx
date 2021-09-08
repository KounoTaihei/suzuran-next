import { useEffect, useState } from "react";
import styles from '../styles/UnderImage.module.scss';
import Image from 'next/image';
import underImage_1 from '../public/footer-city_c_1.png';
import underImage_2 from '../public/footer-city_c_2.png';
import underImage_3 from '../public/footer-city_c_3.png';
import underImage_4 from '../public/footer-city_c_4.png';

const UnderImageField = () => {
    const [ rized, setRized ] = useState<number>(0);

    const images = [
        underImage_1,
        underImage_2,
        underImage_3,
        underImage_4
    ];

    // 秒数の設定
    const timeout_seconds = 400;

    // 画像を下から出現させる関数
    const rizeImages = () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
            resolve(setRized(1));
            },timeout_seconds)
        })
        promise.then((resolve) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(setRized(2));
                },timeout_seconds)
            })
        }).then((resolve) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(setRized(3));
                },timeout_seconds)
            })
        }).then((resolve) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(setRized(4));
                },timeout_seconds)
            })
        }).then((resolve) => {
            setTimeout(() => {
                const image_items = document.getElementsByClassName('under_image');
                for(let i = 0; i < image_items.length; i++){
                    image_items[i].classList.add('done');
                }
                if(document.getElementById('main-bgi')){
                    document.getElementById('main-bgi')?.classList.add('done');
                }
            },timeout_seconds * 3)
        })
    }

    useEffect(() => {
        rizeImages();
    },[])

    return(
        <>
            <ul className={styles.under_image_field}>
                {images.map((image, i) =>
                    <li key={i}>
                        <span className={styles.img_wrapper}>
                            <Image src={image} className={styles.under_image} />
                        </span>
                    </li>
                )}
            </ul>
            <div className="main-bgi-field">
                <img src={`${process.env.PUBLIC_URL}/img/paint_orange.png`} className="main-bgi" id="main-bgi" />
            </div>
        </>
    )
}

export default UnderImageField;
