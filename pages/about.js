import Head from 'next/head';

import Layout from '../components/Layout';
import Container from '../components/UI/Container';
import AboutContent from '../components/AboutContent/AboutContent';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | about</title>
            </Head>
            <Container>
                <AboutContent />
            </Container>
        </Layout>
    );
}
