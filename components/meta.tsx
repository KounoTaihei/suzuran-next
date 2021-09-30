import Head from 'next/head';

export const Meta = ({ title, description }: Props) => {
    return (
        <Head>
            <title>{title && `${title} | `}パソコンくらぶ すずらん | 大分県大分市の初心者向けパソコン教室</title>
            <meta name="description" content={description ? description : "自分のペースでラクラク学習！自由に選べる学習時間！初心者のためのパソコン教室 オープン！ただいま無料体験レッスンご予約受付中！"} />
            <meta charSet="utf-8"></meta>
        </Head>
    )
}

interface Props {
    title?: string
    description?: string
}