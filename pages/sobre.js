import Head from 'next/head';
import React from 'react';
import styles from '../styles/Sobre.module.css';

export default function Sobre({author}) {
    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Sobre
                </h1>
                Autor: {author}
            </main>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            author: 'Carlos Filho'
        }
    };
}