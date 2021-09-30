import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Content from '../components/content';
import shoukaiImage from '../public/image_course.jpeg';
import instructorImage from '../public/1594192173.png';
import styles from '../styles/Index.module.scss';
import { ids } from '../libs/ids';
import { Meta } from '../components/meta';

const Home: NextPage = () => {
  /** 教室紹介部分 */
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
            contentTitle = '教室の紹介'
            text = {text}
            id={ids.home.shoukai}
            image={shoukaiImage}
            alt="教室紹介の画像"
        />
      </>
    )
  }

  /** 教室の特徴部分 */
  const Tokucho = () => {
    const items = [
      {
          title: '個別学習',
          content: 
          <>
          &emsp;当パソコン教室は一斉授業ではなく、少人数クラス制でもなく、完全な個別学習です。一斉授業や少人数クラス制の授業スタイルですと、他の生徒さんの進み具合に合わせなくてはいけません。また自分が理解できなかった所を質問するのも気が引けます。完全個別授業なら、全てが自分のペース。授業内容も自分の好みで選択できます。<br></br> 
          &emsp;これなら初心者の方も、資格を目指す方も、自分の満足のいく授業が受けられます。
          </>
      },
      {
          title: 'お値打ちな価格',
          content:
          <>
          &emsp;１コマ（５０分）あたり１５００円（回数が多くなるとさらにお得）です。<br></br>
          あとはオリジナルテキストが１冊１８００円。<br></br>
          その他の費用は一切かかりません。 <br></br>
          &emsp;パソコン教室の維持費やパソコン使用料、コース料金などを徴収するパソコン教室がちまたにはあふれていますが、当パソコン教室では、月謝に全て含まれています。 <br></br>
          もちろん安かろう悪かろうではありません。授業の質には自信があります。 <br></br>
          &emsp;それは<span className="under-line">パソコン検定合格率９５％</span>が証明しています。 
          </>
      },
      {
          title: '好きな曜日・時間でレッスン',
          content:
          <>
          &emsp;完全個別授業ですので、曜日・時間は自由に選ぶことができます。例えば「毎週○曜日の○時」のように決めておいても良いですし、「今週は○曜日の○時、来週は□曜日の□時」というように変則でもＯＫです。ご都合に合わせてご予約下さい。当日のご予約もお席が空いていればOKですよ。 <br></br>
          また前日までなら振り替えも自由自在。これなら用事ができても安心です。<br></br>
          &emsp;1日2レッスン以上も可能です。
          </>
      },
      {
          title: '安心の月謝制',
          content:
          <>
          &emsp;「授業料を一括前納」なんてパソコン教室は、「お金さえもらったらあとは知らないよ」って言っているようなものです。授業内容に自身があるから私たちのパソコン教室はあえて月謝制にしました。
          </>
      },
      {
          title: 'まずは無料体験学習から',
          content:
          <>
          &emsp;ぜひ無料体験学習にお越し下さい。パソコン授業風景、パソコン教室の雰囲気を実際に味わっていただき、パソコンに触って頂き 少しだけ授業を体験出来ます。「これならできる！」とお感じになってからのパソコン教室入会をオススメしています。
          </>
      }
    ];

    const text = (
      <ul className={styles.school_detail_items}>
        {items.map((item, i) =>
          <li key={i} className={styles.detail_item}>
            <p className={styles.detail_item_title}><FontAwesomeIcon icon={faCheckCircle} /> {item.title}</p>
            <p>
                {item.content}
            </p>
          </li>
        )}
      </ul>
    );
    
    return (
      <>
        <Content
          contentTitle="教室の特徴"
          text={text}
          id={ids.home.tokuchou}
        />
      </>
    )
  }

  /** インストラクター紹介部分 */
  const Instructor = () => {
    const text = (
      <p>
          こんにちは。教室長の河野（こうの）です。<br></br><br></br>
          <span className="under-line">パソコン初心者</span>の方や、習い事をしたいけど何をしたらいいかと迷っている方、パソコンを始めてみませんか？<br></br><br></br>
          パソコンが使えるようになると、色々な事ができるようになって楽しいですよ。やりたい事を実現できるように、<span className="under-line">全力でサポートさせて頂きます！</span><br></br><br></br>
          同じ事でも何度も聞いてくださいね。笑顔でお答えいたします！
      </p>
    );

    return (
      <>
        <Content
            contentTitle = 'インストラクター紹介'
            text = {text}
            id={ids.home.instructor}
            image = {instructorImage}
            alt = "教室長の画像"
            imageSize={"180"}
            instructor={true}
        />
      </>
    )
  }

  return (
    <>
      <Meta />
      <div className={styles.index}>
        <Shoukai />
        <Tokucho />
        <Instructor />
      </div>
    </>
  )
}

export default Home
