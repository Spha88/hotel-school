import Head from 'next/head';
import Layout from '../components/Layout';
import GalleryContent from '../components/GalleryContent/GalleryContent';


export default function Home({ about }) {
    return (
        <Layout>
            <Head>
                <title>Preverance HS | Gallery</title>
            </Head>

            <GalleryContent />

        </Layout>
    );
}
