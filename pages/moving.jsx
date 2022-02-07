// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../components/Nav';
// eslint-disable-next-line no-unused-vars
import { Footer } from '../components/Footer';
export default function Moving() {
  return (
    <div className="min-h-screen py-3">
      <Head>
        <title>I love 軽運送-moving</title>
      </Head>
      <Nav />
      <main className="flex flex-col items-center justify-center m-20">
        <h1 className="text-6xl font-bold">
          あすたけ運送の
          <a className="text-blue-500">
            強み
          </a>
        </h1>
        <article>
          <p className='m-8'>あすたけ運送は軽貨物ドライバー事業ですが、いつでもどこでも迅速かつ丁寧にお客様のニーズに合った荷物の配送が可能になってます。</p>
          <h2 className='m-8 text-4xl font-bold'>荷物の安全性</h2>
          <p className='m-8'>ドライバーが責任を持ってお預かりしお届けいたします。荷物は安心です。紛失等をございません。</p>
          <h2 className='m-8 text-4xl font-bold '>引っ越し対応エリア</h2>
          <p className='m-8'>あすたけ運送の稼働エリアは基本的に福岡県・佐賀県・長崎県・熊本県・宮崎県・鹿児島県・山口県です。お客様との相談で他の地域での配送も可能ですのでお気軽に相談ください。</p>
          <h2 className='m-8 text-4xl font-bold'>貨物に損害があった場合</h2>
          <p className='m-8'>運送による貨物の損害に対して<a className='text-blue-500'>貨物保険</a>を担保いたします。</p>
          <p className='m-10'>貨物賠償 500万円</p>

          <h1 className='flex items-center justify-center m-8 text-5xl font-bold table-col'>引っ越し料金表（２月<a className='text-red-500'>限定</a>）</h1>
          <table class="border-separate border-2 border-gray-500 m-16">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">地域・料金（税抜）</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">福岡市内</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">福岡県内・佐賀・熊本</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">山口・長崎</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">宮崎・鹿児島</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">幌車・軽車両のどちらか１台</td>
                <td class="border border-gray-400 px-4 py-2">７，０００円</td>
                <td class="border border-gray-400 px-4 py-2">１４，０００円</td>
                <td class="border border-gray-400 px-4 py-2">２６，０００円</td>
                <td class="border border-gray-400 px-4 py-2">４０，０００円</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">幌車・軽車両の２台</td>
                <td class="border border-gray-400 px-4 py-2">１４，０００円</td>
                <td class="border border-gray-400 px-4 py-2">２５，０００円</td>
                <td class="border border-gray-400 px-4 py-2">５０，０００円</td>
                <td class="border border-gray-400 px-4 py-2">８０，０００円</td>
              </tr>
            </tbody>
          </table>
          <p className='m-8'>
            <strong>【サービスの概要】</strong><br />
            ２月申し込みのお客様は３月引っ越しも<a className='text-red-500'>２月限定料金</a>になります。<br />
          </p>
          <h1 className='flex items-center justify-center m-8 text-5xl font-bold table-col'>引っ越し料金表（３月）</h1>
          <table class="border-separate border-2 border-gray-500 m-16">
            <thead>
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">地域・料金（税抜）</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">福岡市内</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">福岡県内・佐賀・熊本</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">山口・長崎</th>
                <th class="border border-gray-400 px-4 py-2 text-gray-800">宮崎・鹿児島</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">幌車・軽車両のどちらか１台</td>
                <td class="border border-gray-400 px-4 py-2">１４，０００円</td>
                <td class="border border-gray-400 px-4 py-2">２８，０００円</td>
                <td class="border border-gray-400 px-4 py-2">５２，０００円</td>
                <td class="border border-gray-400 px-4 py-2">９６，０００円</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">幌車・軽車両の２台</td>
                <td class="border border-gray-400 px-4 py-2">２０，０００円</td>
                <td class="border border-gray-400 px-4 py-2">４０，０００円</td>
                <td class="border border-gray-400 px-4 py-2">７０，０００円</td>
                <td class="border border-gray-400 px-4 py-2">１００，０００円</td>
              </tr>
            </tbody>
          </table>
          <p className='m-8'>
            <strong>【サービスの概要】</strong><br />
            単身、特にシェアハウス向けの引越しサービスです。<br />
            見積もり＆下見なし。面倒な引越し会社とのやり取りはございません。<br />
            ２月申し込みのお客さには<a className='text-red-500'>２月限定料金</a>での引っ越しを承ります。<br />
            軽バン（高110cm×横110cm長180cm）又は<br />
            幌車　（高200cm横140cm長180cm）で運びます。<br />
            マスクとウイルスバスター、消毒液常備でコロナ対策万全です。<br />
            無償で同乗可能ですが、コロナウイルスが流行っておりますので控えさせてもらっています。
          </p>
          <p className='m-8'>
            <strong>【エリア】</strong><br />
            積地（福岡市内）〜降し地（福岡・佐賀・山口・長崎・熊本・宮崎・鹿児島）。以外の地域は<a className='text-red-500'>要相談。</a><br />
          </p>
          <p className='m-8'>
            <strong>【荷物について】</strong><br />
            <a className='text-blue-500'>低価格・高品質</a>を実現するため、以下の項目にご了承下さい。<br />
            <a className='text-red-500'>○梱包・開封はお客さま自身</a>でお願いいたします。<br />
            ○積地は基本<a className='text-red-500'>福岡市内</a>になります。その他は要相談。<br />
            ◯お客様のお部屋は<a className='text-red-500'>1K 1DK</a>とさせて頂きます。<br />
            ○段ボールの用意はございません。ご自身でご用意お願いいたします。<br />
            ○組立家具の分解、組立、家電等の設置はお客様自身でお願いいたします。<br />
            ○除湿、加湿器等は水抜きを忘れずに行って下さい。<br />
            ○作業開始時間までに梱包を済ませ、いつでも運び出し出来る状態にしておいて下さい。<br />
            ○お荷物の運搬は、場合によってはお客様にもお手伝いして頂く事がございます。<br />
            ○高さ115cmを超える冷蔵庫などは倒して運びます。※倒すのが難しいお客さまは<a className='text-red-500'>幌車</a>をおすすめいたします。</p>
          <p className='m-8'><strong>【料金について】</strong><br />
            ○料金は<a className='text-red-500'>現金決済のに</a>対応しております。カードの取り扱いは行なっておりません。<br />
            ○3時間を1分でも超える作業は、30分あたり税込5,000円の追加料金となります。<br />
            ○移動距離が20kmを超える場合、高速道路を使用させていただきます。<br />
            ○高速道路、有料駐車場を使用した場合、お客様に実費をお支払いいただきます。<br />
            ○予約内容に変更がある場合、7日前までにお知らせ下さい。<br />
            ○予約内容の変更には応じられない場合があります。</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
