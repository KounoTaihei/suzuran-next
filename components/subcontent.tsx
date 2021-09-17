import Link from 'next/link';
import styles from '../styles/Subcontent.module.scss';
import Image from 'next/image';
import mapImage from '../public/Map01.jpg';
import QRImage from '../public/LINE_QRCode.png';
import { faPhoneSquare, faEnvelope, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { client } from '../libs/client';
import { Closed } from '../types/closed';
import { getDate } from '../functions/get_date';
import { getDay } from '../functions/get_day';

const Subcontent = () => {
    const [ fetching, setFetching ] = useState(false);
    const [ closed, setClosed ] = useState<Closed[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setFetching(true);
            const result: Closed[] = await client.get<CmsResponse>({
                endpoint: 'closed',
            })
            .then(res => res.contents)
            
            setTimeout(() => {
                setClosed(result);
                setFetching(false)
            }, 1000)
        }
        
        fetchData();
    },[])

    // 休校日のhtmlを生成
    const closedDates = closed.map(item => 
        <li key={item.id} className={styles.list_item}>
            <p className={styles.p}>・{item.year}/{item.month}月の休校日</p>
            <p className={styles.p}>
                {item.dates.map((date, i) =>
                    <span key={i}>
                        {`${getDate(date.date)}(${getDay(date.date)})`}
                        {i + 1 !== item.dates.length && '、'}
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
                        <tbody>
                            <tr><td className={styles.td}>月・水・木</td><td className={styles.td}>10:00～19:50</td></tr>
                            <tr><td className={styles.td}>火・第４、５日曜日</td><td className={styles.td}>10:00～11:50</td></tr>
                            <tr><td className={styles.td}>金・土・日</td><td className={styles.td}>10:00〜15:50</td></tr>
                            <tr><td className={styles.td} colSpan={2}>不定休</td></tr>
                        </tbody>
                    </table>
                </div>
                <Link href="/about#timetable" passHref>
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
                        {fetching && <div className={styles.loader}>Loading...</div>}
                        {!fetching && closedDates}
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
                    <a className={styles.google} href="https://www.google.com/maps/place/%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3%E3%81%8F%E3%82%89%E3%81%B6+%E3%81%99%E3%81%9A%E3%82%89%E3%82%93/@33.2420837,131.6668932,19.76z/data=!4m5!3m4!1s0x35469e139f18909f:0xff4ebe33efa0d869!8m2!3d33.2421166!4d131.6671352">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Google Map
                    </a>
                </div>
            </div>
            {/* お問い合わせ */}
            <div className={`${styles.item} ${styles.contact}`}>
                <p className={styles.item_name}>無料体験などのお問い合わせ</p>
                <div className={styles.item_body}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a href="tel:097-579-6315"><FontAwesomeIcon icon={faPhoneSquare} className={styles.icon} /> 097-579-6315</a></li>
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

interface CmsResponse {
    contents: Closed[]
}