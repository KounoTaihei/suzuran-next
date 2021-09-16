import { faChevronDown, faExclamationCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Content from '../../components/content'
import styles from '../../styles/Questions.module.scss';
import Link from 'next/link';

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
        },
        {
            question: "曜日とか時間が固定できないんですけど。",
            answer: "当校は予約制ですので、ご都合の良い時間にレッスンできます。ご安心ください。",
        },
        {
            question: "今月はもう行けそうにありません。１回分残ってるんですが、どうなりますか？",
            answer: "その分は来月に予約振替してください。有効期限は該当レッスン日から１ケ月です。"
        },
        {
            question: "家にはまだパソコンが無いんですけど、大丈夫ですか？",
            answer: "大丈夫です。パソコンって高いものですから、自分が「欲しい」っていう気持ちになったら買ってはどうでしょうか？それまでは教室で練習しましょう。"
        }
    ]

    const text = (
        <div className={styles.questions}>
            <div className={styles.questions_title}>
                ここでは、今まであった問い合わせや、皆さんが気になるパソコン教室のＱ＆Ａについて色々と書いていきたいと思います！
            </div>
            {items.map((item, i) =>
                <>
                    <div
                        className={open === i + 1 || open === 0 ? `${styles.baloon} ${styles.question} ${styles.open}` : `${styles.baloon} ${styles.question}`}
                        onClick={() => {
                            if(open === i + 1) {
                                setOpen(0);
                            } else {
                                setOpen(i + 1);
                            }
                        }}
                    >
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
                        <div className={open === i + 1 ? `${styles.baloon} ${styles.answer} ${styles.open}` : `${styles.baloon} ${styles.answer}`}>
                            <span className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </span>
                            <div>
                                {item.answer}
                            </div>
                        </div>
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