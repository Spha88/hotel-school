import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout';
import Container from '../components/UI/Container';


export default function Home() {
  return (
    <Layout>
      <Container>
        <h2>Home</h2>
      </Container>
    </Layout>
  )
}
