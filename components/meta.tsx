import Head from 'next/head';

export const Meta = ({ title, description }: Props) => {
    return (
        <Head>
            <title>{title} | パソコンくらぶ すずらん | 大分県大分市の初心者向けパソコン教室</title>
            <meta property="description" content={description}></meta>
        </Head>
    )
}

interface Props {
    title: string
    description: string
}