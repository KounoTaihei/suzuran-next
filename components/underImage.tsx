import { useEffect, useState } from "react";
import styles from '../styles/UnderImage.module.scss';

const UnderImageField = () => {
    const [ rized, setRized ] = useState<number>(0);
    const [ done, setDone ] = useState<boolean>(false);

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
                setDone(true);
            },timeout_seconds * 3)
        })
    }

    useEffect(() => {
        rizeImages();
    },[])

    return(
        <>
            <div className={done ? `${styles.wrapper} ${styles.done}` : styles.wrapper} id="underimage">
                <div className={rized > 0 ? `${styles.under_image} ${styles.rized}` : styles.under_image}></div>
                <div className={rized > 1 ? `${styles.under_image} ${styles.rized}` : styles.under_image}></div>
                <div className={rized > 2 ? `${styles.under_image} ${styles.rized}` : styles.under_image}></div>
                <div className={rized > 3 ? `${styles.under_image} ${styles.rized}` : styles.under_image}></div>
            </div>
            <div className={done ? `${styles.main_bgi_field} ${styles.done}` : styles.main_bgi_field}></div>
        </>
    )
}

export default UnderImageField;
