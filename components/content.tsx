import React, { ReactElement } from 'react';
import styles from '../styles/Content.module.scss';
import Image from 'next/image';

const Content = (props: Props) => {

    // 画像があればimage-fieldを表示する
    const renderImageField = () => {
        if(props.image){
            return (
                <div className={styles.image_field}>
                    <Image src={props.image} alt={props.alt} loading="lazy" />
                </div>
            )
        }
    }

    return (
        <div className={`${styles.content} ${styles[props.className]}`}>
            <h3 className={styles.content_title}>{props.contentTitle}</h3>
            {/* 画像がある場合はflexクラスを追加 */}
            <div className={props.image ? `${styles.content_body} ${styles.flex}` : styles.content_body}>
                {props.image && renderImageField()}
                <div className={props.image ? `${styles.text_field} ${styles.flex}` : styles.text_field}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Content;

interface Props {
    className: string
    contentTitle: string
    text: ReactElement
    image?: StaticImageData
    alt?: string
}