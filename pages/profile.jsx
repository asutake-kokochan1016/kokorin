// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../components/Nav';
// eslint-disable-next-line no-unused-vars
import { Footer } from '../components/Footer';
export default function profile() {
  return (
    <div className="min-h-screen py-3">
      <Head>
        <title>I love 軽運送-profile</title>
      </Head>
      <Nav />
      <main className="flex flex-col items-center justify-center m-20">
        <h1 className="text-6xl font-bold">
          あすたけ運送の
          <a className="text-blue-500">
            車両紹介
          </a>
        </h1>
        <article>
          <h2 className="m-8 text-4xl font-bold">車両の積載量について</h2>
          <p>車両はスズキのエブリーになります。 車両については以下をご覧ください。</p>
          <p>サイトでは新型エブリーですが、使用車は若干寸法が異なります。御了承ください。</p>
          <p><a href="http://www.suzuki.co.jp/car/every/capacity/"><strong><a className='text-green-500'>【エブリイ積載性能｜スズキ公式サイト】</a></strong></a></p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
