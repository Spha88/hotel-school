import Head from 'next/head';
import ContactContent from '../components/ContactPageContent/ContactContent';
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
                <h1>Contact Us</h1>
                <ContactContent />
            </Container>
        </Layout>
    );
}
