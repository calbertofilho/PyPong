import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Busca.module.css';

export default function Busca() {
    const [searchText, setSearchText] = React.useState('');
    const [movieList, setMovieList] = React.useState([]);

    const handleSearch = async () => {
        if(searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Busca
                </h1>

                <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>

                <hr />

                <ul>
                    {movieList.map((item, index) => (
                        <li key={index}>
                            <Link href={`/movie/${item.id}`}>
                                <a>
                                    <Image src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} width="256" height="384" /><br />
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}