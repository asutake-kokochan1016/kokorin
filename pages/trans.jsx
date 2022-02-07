// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../components/Nav';
// eslint-disable-next-line no-unused-vars
import { Footer } from '../components/Footer';
export default function Trans() {
  return (
    <div className="min-h-screen py-3">
      <Head>
        <title>I love 軽運送-trans</title>
      </Head>
      <Nav />
      <main className="flex flex-col items-center justify-center m-20 ">
        <h1 className="text-6xl font-bold">
          あすたけ運送の
          <a className="text-blue-500">
            運送料金</a>
        </h1>
        <article>
          <h2 className='m-8 text-4xl font-bold'>運送料金</h2>
          <p className='m-8'>あすたけ運送はコストパフォーマンスが高い運送料金を２パターン用意しております。<br />
            この他、貴社の料金プランがある場合は要相談でお答えいたします。</p>
          <h2 className='m-8 text-4xl font-bold'>時間制チャーター便（ルート配送、往復の運送など。）</h2>
          <table class="border-separate border-2 border-gray-500 m-16">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">時間制チャーター便（ルート配送、往復の運送など。）</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800"></th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">時間と走行距離</td>
                <td class="border border-gray-400 px-4 py-2">運送料金</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">３時間（走行距離４０km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥８，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">４時間（走行距離５５km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥１０，５００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">５時間（走行距離７０km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥１３，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">６時間（走行距離８５km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥１５，５００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">７時間（走行距離１００km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥１８，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">８時間（走行距離１１５km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥２０，５００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">９時間（走行距離１３０km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥２３，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">１０時間（走行距離１４５km以内）</td>
                <td class="border border-gray-400 px-4 py-2">¥２５，５００</td>
              </tr>
            </tbody>
          </table>
          <strong><a className='text-red-500'>【注意事項】</a></strong><br />
          <div className='m-8'>
            ◯これ以上の時間チャーターはお受けできません。<br />
            ◯４時間毎に１時間の休憩を入れさせてもらいます。<br />
            ◯走行距離が規定を越えた場合は１km毎150円申し受けします。<br />
            ◯時間帯の割増料金は土日祝日と２２時以降にかかる場合は２割増を申し受けします。<br />
          </div>

          <h1 className='flex items-center justify-center m-8 text-5xl font-bold table-col'>距離性スポット便（引っ越しを除く）</h1>
          <table class="border-separate border-2 border-gray-500 m-16">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">距離制スポット（引っ越し除く）</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">基本料金（２０kmまで）</td>
                <td class="border border-gray-400 px-4 py-2">¥５，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">距離料金（２１から５０kmまで１km毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥１５０</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">距離料金（５１から１００kmまで１km毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥１４０</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">距離料金（１０１から１５０kmまで１km毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥１３０</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">距離料金（１５１から２００kmまで１km毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥１２０</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">距離料金（２０１km〜１km毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥１１０</td>
              </tr>
            </tbody>
          </table>
          <strong><a className='text-red-500 '>【注意事項】</a></strong><br />
          <div className='m-8'>
            ◯長い距離を走る分、お得になっております。<br />
            ◯４時間毎に１時間の休憩を入れさせてもらいます。<br />
            ◯時間帯の割増料金は土日祝日と２２時以降にかかる場合は２割増を申し受けします。<br />
            ◯この他、付帯作業が生じた場合にはご相談の上、追加料金を申し受けます。<br />
          </div>

          <h2 className='m-8 text-4xl font-bold'>付帯料金</h2>
          <table class="border-separate border-2 border-gray-500 m-16">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800"></th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">待機料金（１０分まで無料その後１０分毎）</td>
                <td class="border border-gray-400 px-4 py-2">７００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">経由料金（１ヶ所追加毎）</td>
                <td class="border border-gray-400 px-4 py-2">¥２，０００</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">駐車料金</td>
                <td class="border border-gray-400 px-4 py-2">実費</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">高速料金</td>
                <td class="border border-gray-400 px-4 py-2">実費</td>
              </tr>
            </tbody>
          </table>
          <strong><a className='text-red-500 '>【注意事項】</a></strong><br />
          <a className='m-8'>※待機料金には荷待ちや荷おろし、荷上げの時間も含みます。</a><br />


        </article>

      </main>
      <Footer />
    </div>
  );
}
