import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/content';
import shoukaiImage from '../public/fake.webp';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const Shoukai = () => {
    const text = (
      <p>
        「パソコンくらぶ　すずらん」は全国ネットのパソコン教室<a href="http://www.pasokura.com/pasokura/schools/view/192" target="_blank" rel="noreferrer">「パソコンくらぶ <FontAwesomeIcon icon={faExternalLinkAlt} />」</a>の一つとして<span className="under-line">大分市に初めて</span>オープンしました！<br></br><br></br>
        「パソコン教室って何だか敷居が高い」<br></br>
        <span className="under-line">「初心者でも大丈夫かな？」</span><br></br>
        という、あなたのためのパソコン教室です。 <br></br><br></br>
        全国各地の「パソコンくらぶ」の生徒さんからたくさんの喜びの声をいただいています。 <br></br>
        「パソコンがだいぶ分かるようになった」<br></br>
        「パソコンを使えて主人に誉められました♪」<br></br>
        <span className="under-line">「パソコン教室で覚えた技術で就職が決まりました！」</span> など<br></br><br></br>
        皆さんもともと秘めているご自身のスキル伸ばしてみませんか？<br></br>
        大分市付近の皆様！<span className="under-line">まずは遊びにくる感覚でパソコン教室にいらしてください♪</span>
      </p>
    )

    return (
      <>
        <Content
            className = 'school-introduction'
            contentTitle = '教室の紹介'
            text = {text}
            image = {shoukaiImage}
        />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>すずらん</title>
      </Head>
      <div className={styles.home}>
        <Shoukai />
      </div>
    </>
  )
}

export default Home
