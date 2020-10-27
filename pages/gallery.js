import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/UI/Container';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | about</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Container>
                <h1>Gallery Page</h1>
            </Container>
        </Layout>
    );
}
