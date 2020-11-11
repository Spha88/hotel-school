import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/UI/Container';
import CoursesContent from '../components/CoursesContent/CoursesContent';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | Courses</title>
            </Head>
            <Container>
                <CoursesContent />
            </Container>
        </Layout>
    );
}
