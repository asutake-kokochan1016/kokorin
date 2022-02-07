// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../components/Nav';
// eslint-disable-next-line no-unused-vars
import { Footer } from '../components/Footer';
export default function Contact() {
  return (
    <div className="min-h-screen py-3">
      <Head>
        <title>I love 軽運送-contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex flex-col items-center justify-center m-20">
        <h1 className="text-6xl font-bold">
          あすたけ運送の
          <a className="text-blue-500">
            お問い合わせ
          </a>
        </h1>
        <h2 className='m-8 text-4xl font-bold'><a className='text-red-500'>２月まで</a>は色んな特典があります.<br />お気軽にお問合せください。</h2>
        <h2 className='m-8 text-4xl font-bold'>お問合せ先</h2>
        <h2 className='text-4xl font-bold '>TEL 070-8550-0423</h2>
        <h2 className='m-8 text-4xl font-bold'>メール asutakeunsou@gmail.com</h2>

        <p className='text-3xl'>
          <h2>お問い合わせ受付時間 平日:AM 8:00~PM18:00 </h2>
        </p>
      </main>
      <Footer />
    </div>
  );
}
