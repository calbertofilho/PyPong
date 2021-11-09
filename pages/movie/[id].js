import Head from 'next/head';
import React from 'react';
import styles from '../../styles/Detalhe.module.css';

export default function Detalhe({info}) {
    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} width="150" /><br />
                    {info.title}
                </h1>

                <p>
                    Nota: {info.vote_average}<br />
                    Lançamento: {info.release_date}<br />
                    {info.overview}
                </p>

                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
    const json = await res.json();

    return {
        props: {
            info: json.info
        }
    };
}