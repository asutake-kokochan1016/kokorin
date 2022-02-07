// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars
import { Footer } from '../components/Footer';
// eslint-disable-next-line no-unused-vars
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>I love 軽運送</title>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          I love{' '}
          <Link href='../'>
            <a className="text-blue-500">
              軽運送!
            </a>
          </Link>
        </h1>

        <p className="mt-3 text-2xl">
          みんな、集まれ{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Asu take unsou!
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href='../profile'>
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-400 focus:text-blue-400"
            >
              <h3 className="text-2xl font-bold">&spades;自己紹介 &darr;</h3>
              <p className="mt-4 text-xl">
                スタッフの自己紹介です。
              </p>
            </a>
          </Link>
          <Link href='../moving'>
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-400 focus:text-blue-400"
            >
              <h3 className="text-2xl font-bold">&clubs;引っ越し料金&rarr;</h3>
              <p className="mt-4 text-xl">
                引っ越し・軽貨物運送についての料金表です。
              </p>
            </a>
          </Link>
          <Link href='../trans'>
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-400 focus:text-blue-400"
            >
              <h3 className="text-2xl font-bold">&hearts;運送料金 &rarr;</h3>
              <p className="mt-4 text-xl">
                日々の日記を書いていきますのでみにきてください。
              </p>
            </a>
          </Link>
          <Link href='../contact'>
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-400 focus:text-blue-400"
            >
              <h3 className="text-2xl font-bold">&diams;お問い合わせ &rarr;</h3>
              <p className="mt-4 text-xl">
                要望がございましたらお問い合わせ下さい。
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />

    </div>
  );
}
