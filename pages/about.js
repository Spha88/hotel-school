import Head from 'next/head';
import Layout from '../components/Layout';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | about</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1>About Page</h1>
        </Layout>
    );
}
