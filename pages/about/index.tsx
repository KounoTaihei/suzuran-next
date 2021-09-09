import Content from '../../components/content';
import styles from '../../styles/About.module.scss';
import Image from 'next/image';
import firstFeeImage from '../../public/Suzu_Homepage_Icon01.png';
import textBookImage from '../../public/Suzu_Homepage_Icon02.png';
import monthlyFeeImage from '../../public/Suzu_Homepage_Icon03.png';

const About = () => {
    /** コース紹介 */
    const Course = () => {
        const table_items = [
            {
                thText: 'パソコン基礎編',
                tdText:
                <>
                電源の入れ方からＷｉｎｄｏｗｓの基本操作までしっかり身につきます。<br></br>
                パソコンが身近に感じられ操作が楽しくなります。
                </>
            },
            {
                thText: 'インターネット・メール編',
                tdText:
                <>
                ご家族・お友達とメールでおしゃべりができ、インターネットで世界中の情報を集めたり、ショッピングや趣味に活かせます。
                </>
            },
            {
                thText: 'パソコン活用編',
                tdText:
                <>
                Ｗｉｎｄｏｗｓを操作する上で覚えておくと便利な機能や、ワード・エクセルを学習する上で必要な操作を学びます。
                </>
            },
            {
                thText: 'ワード入門編',
                tdText:
                <>
                通常の文書作成はもちろん、写真やイラスト付の年賀状・暑中見舞いや案内状が作成できます
                </>
            },
            {
                thText: 'エクセル入門編',
                tdText:
                <>
                表やグラフを作成しながら、エクセルの基礎から学習できます。
                </>
            },
            {
                thText: 'パワーポイント',
                tdText:
                <>
                スライドショーソフトです。プレゼンテーションなどに使うことができます。 
                </>
            },
            {
                thText: 'ワード上級編',
                tdText:
                <>
                マイクロソフトのオフィススペシャリスト（一般）の到達レベルを目指します。様々なテクニックを身につけておくととても便利です。
                </>
            },
            {
                thText: 'エクセル上級編',
                tdText:
                <>
                マイクロソフトのオフィススペシャリスト（一般）の到達レベルを目指します。様々なテクニックを身につけておくととても便利です。
                </>
            }
        ];

        const text = (
            <>
                <div className={styles.courses_title_space}>
                    <p className={styles.p}><span className="bold_font">個別に選べる授業内容</span> (※どの内容でも料金は同じです)</p>
                    <p className={styles.p}>
                        パソコン教室でやる事を文章で書くと難しく感じますが<br></br>
                        やってみれば意外と簡単！楽しく取り組むことができます！<br></br>
                        <span className="color_font">みんなが笑えるパソコン教室(≧▽≦)</span><br></br>
                        大分市でそんな教室作りを目指しています！
                    </p>
                </div>
                <table className={styles.table}>
                    <tbody>
                        {table_items.map((item, i) =>
                            <tr key={i} className={styles.tr}>
                                <th className={styles.th}><p>{i + 1}. {item.thText}</p></th>
                                <td><p>{item.tdText}</p></td>
                            </tr>
                        )}
                        <tr><td colSpan={2} style={{textAlign:'right'}}>などなど</td></tr>
                    </tbody>
                </table>
            </>
        );

        return (
            <>
                <Content
                    contentTitle="コース紹介"
                    text={text}
                />
            </>
        )
    }

    /** 料金体系 */
    const Fee = () => {
        const FeeHeading = () => {
            return(
                <div className={styles.fee_heading}>
                    <table className={styles.fee_heading_table}>
                        <tr>
                            <th><h4>・ 初回のみ入会金</h4></th>
                            <td><Image src={firstFeeImage} alt="入会金の画像" loading="lazy" /></td>
                        </tr>
                        <tr>
                            <th><h4>・ 教科書代金</h4></th>
                            <td><Image src={textBookImage} alt="教科書代金の画像" loading="lazy" /></td>
                        </tr>
                        <tr>
                            <th><h4>・ 月々の月謝</h4></th>
                            <td><Image src={monthlyFeeImage} alt="月謝の画像" loading="lazy" /></td>
                        </tr>
                    </table>
                    <div className={styles.fee_heading_text}>
                        <div className={styles.under_line_text}>設備維持料金、駐車場料金等、パソコン使用料</div>
                        <div className={styles.border_text}>一切かかりません！</div>
                        <div className={styles.color_text}>全て月謝に含まれております！</div>
                    </div>
                </div>
            );
        }

        const FeeBody = () => {
            const items = [
                {
                    course : '月4回コース',
                    fee : '6,000',
                    text : 'おためしコース、ゆっくりマイペース型',
                },
                {
                    course : '月8回コース',
                    fee : '10,800',
                    text : '標準しっかり型、主婦向け',
                    heading : '人気♪'
                },
                {
                    course : '月10回コース',
                    fee : '12,000',
                    text : '充実お仕事型、がっちり勉強したい方むけです。',
                    heading : '一番人気♪'
                },
                {
                    course : '月16回コース',
                    fee : '18,400',
                    text : '特訓お急ぎ型、学生さん・就職対策向け',
                },
                {
                    course : '月20回コース',
                    fee : '21,000',
                    text : '学生さん・就職対策向け【授業一コマあたり単価1,050円！】 '
                },
                {
                    course : '月40回コース',
                    fee : '38,000',
                    text : <>学生さん・就職対策向け、なんと26回分の料金で40回まで受講できます。<br></br>【授業一コマあたり単価950円！】</>,
                }
            ];

            return (
                <div className={styles.fee_body}>
                    <ul className={styles.fee_body_list}>
                        <li className={styles.fee_body_list_item}>
                            <div className={styles.flex}>
                                <Image src={firstFeeImage} alt="入会金の画像" loading="lazy" />
                                <div>
                                    <h5>
                                        入会金
                                        <span className={styles.fee_body_fee}>10,800</span>
                                        円（税込）
                                    </h5>
                                </div>
                            </div>
                            <p>ホームページを見た方は半額！！</p>
                        </li>
                        {items.map((item, i) =>
                            <li key={i} className={styles.fee_body_list_item}>
                                <div className={styles.flex}>
                                    <Image src={monthlyFeeImage} alt="月謝の画像" loading="lazy" />
                                    <div className={item.heading ? styles.relative : ""}>
                                        {
                                            item.heading ?
                                            <div className={styles.fee_body_text_heading}>
                                                {item.heading}
                                            </div>
                                            : ""
                                        }
                                        <h5>
                                            {item.course}
                                            <span className={styles.fee_body_fee}>{item.fee}</span>
                                            円（税込）
                                        </h5>
                                    </div>
                                </div>
                                <p>{item.text}</p>
                            </li>
                        )}
                    </ul>
                </div>
            );
        }

        const FeeFooter = () => {
            return (
                <div className={styles.fee_footer}>
                    <p>
                        多く受講するほど学習スピードも増し、料金もお得です。(^^♪<br></br>
                        『回数』は『１ヶ月あたりの回数』ですので、１ヶ月以内の消化をお願いします。<br></br><br></br>
                        一番最高の割引きはなんと１コマ950円！！！！！<br></br>
                        <span className={styles.star}>☆</span> お得な家族割もあります!!（それぞれの月謝料から1割引き）<br></br><br></br>
                        詳しくはお電話下さい！ <span className="color_font">097-579-6315</span>
                    </p>
                </div>
            );
        }

        const getText = () => {
            return (
                <>
                    <FeeHeading />
                    <FeeBody />
                    <FeeFooter />
                </>
            )
        }

        return (
            <>
                <Content
                    contentTitle="料金体系"
                    text={getText()}
                />
            </>
        )
    }

    return (
        <div className={styles.about}>
            <Course />
            <Fee />
        </div>
    )
}

export default About;