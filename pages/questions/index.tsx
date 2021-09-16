import { faChevronDown, faExclamationCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Content from '../../components/content'
import styles from '../../styles/Questions.module.scss';

const Questions = () => {
    const [ open, setOpen ] = useState<number>(0);

    const items: {
        question: string
        answer: string
    }[] = [
        {
            question: "本当に初心者なんですが、やっていけますか？",
            answer: "最初は皆さん初心者ですよ。当校は、そんな初心者の方でも楽しくできる教室です。無理することなく、一緒に学んでいきましょう！"
        },
        {
            question: "レッスンは基礎からじゃなきゃダメなの？ ワードからやりたいんですけど。",
            answer: "もちろん、ワードから始めていただくことも可能です。ただ、基礎や活用の内容を知っておいた方が、よりスムーズに身につく場合がありますので、ご自分のレベルに合わせて学習することをオススメしています。色々ご相談下さい。"
        }
    ]

    const text = (
        <div className={styles.questions}>
            {items.map((item, i) =>
                <>
                    <div className={`${styles.baloon} ${styles.question}`} onClick={() => setOpen(i + 1)}>
                        <div>
                            <span className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </span>
                            {item.question}
                        </div>
                        <div>
                            <span className={open === i + 1 ? `${styles.iconWrapper} ${styles.open}` : styles.iconWrapper}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                    </div>
                    {open === i + 1 && (
                        <div className={`${styles.baloon} ${styles.answer}`}>
                            <span className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </span>
                            {item.answer}
                        </div>
                    )}
                </>
            )}
        </div>
    )

    return (
        <>
            <Content
                contentTitle="Q & A"
                text={text}
            />
        </>
    )
}

export default Questions;