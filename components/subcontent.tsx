import Link from 'next/link';
import styles from '../styles/Subcontent.module.scss';
import Image from 'next/image';
import mapImage from '../public/Map01.jpg';
import QRImage from '../public/LINE_QRCode.png';
import { faPhoneSquare, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Subcontent = () => {
    const closedItem = [
        {
            year : 2021,
            month: 5,
            date : [
                '12日(水)','17日(月)','21日(金)','27日(木)'
            ]
        },
        {
            year : 2021,
            month: 6,
            date: [
                '2日(水)','7日(月)','11日(金)','17日(木)','23(水)'
            ]
        }
    ]

    // 休校日のhtmlを生成
    const renderClosedItems = closedItem.map((item, i) => 
        <li key={i} className={styles.list_item}>
            <p className={styles.p}>・{item['year']}/{item['month']}月の休校日</p>
            <p className={styles.p}>
                {item['date'].map((date, i) =>
                    <span key={i}>
                        {date}&ensp;
                    </span>
                )}
            </p>
        </li>
    )

    return (
        <div className={styles.sub_content}>
            {/* 開校時間 */}
            <div className={`${styles.item} ${styles.opening}`}>
                <p className={styles.item_name}>開講時間</p>
                <div className={styles.item_body}>
                    <table className={styles.table}>
                        <tr><td className={styles.td}>月・水・木</td><td className={styles.td}>10:00～19:50</td></tr>
                        <tr><td className={styles.td}>火・第４、５日曜日</td><td className={styles.td}>10:00～11:50</td></tr>
                        <tr><td className={styles.td}>金・土・日</td><td className={styles.td}>10:00〜15:50</td></tr>
                        <tr><td className={styles.td} colSpan={2}>不定休</td></tr>
                    </table>
                </div>
                <Link href="/about#timetable">
                    <a className={styles.link}>
                        <FontAwesomeIcon icon={faLink} /> 詳しい時間割
                    </a>
                </Link>
            </div>
            {/* 休校日 */}
            <div className={`${styles.item} ${styles.closed}`}>
                <p className={styles.item_name}>休校日</p>
                <div className={styles.item_body}>
                    <ul className={styles.closed_list}>
                        {renderClosedItems}
                    </ul>
                </div>
            </div>
            {/* 住所 */}
            <div className={`${styles.item} ${styles.address}`}>
                <p className={styles.item_name}>住所</p>
                <div className={styles.item_body}>
                    <p className={styles.p}>
                        〒870-0136
                    </p>
                    <p className={styles.p}>
                        大分市山津町1-11-5<br></br>
                        玉井コーポ101号
                    </p>
                    <Image src={mapImage} alt="教室の地図の画像" loading="lazy" />
                </div>
            </div>
            {/* お問い合わせ */}
            <div className={`${styles.item} ${styles.contact}`}>
                <p className={styles.item_name}>無料体験などのお問い合わせ</p>
                <div className={styles.item_body}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><FontAwesomeIcon icon={faPhoneSquare} className={styles.icon} /> 097-579-6315</li>
                        <li className={styles.li}><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <Link href="/contact"><a>メールでお問い合わせ</a></Link></li>
                        <li className={styles.li}>
                            <span className={styles.line_color}><FontAwesomeIcon icon={faLine} className={styles.icon} /> LINE</span>でお問い合わせ<br></br>
                            <span style={{fontSize: '0.8em'}}>( アドレスをクリックするかQRコードを読み取ってください。 )</span>
                            <div className={styles.line_contact}>
                                <Image src={QRImage} width={75} height={75} alt="LINEのQRコードの画像" loading="lazy" />
                                <a href="https://lin.ee/7tZpA9w" target="_blank" rel="noreferrer">https://lin.ee/7tZpA9w</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Subcontent;