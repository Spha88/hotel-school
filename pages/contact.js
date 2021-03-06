import Head from 'next/head';
import ContactContent from '../components/ContactPageContent/ContactContent';
import Layout from '../components/Layout';
import Container from '../components/UI/Container';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | Contact Us</title>
            </Head>
            <Container>
                <ContactContent />
            </Container>
        </Layout>
    );
}
