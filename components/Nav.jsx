// eslint-disable-next-line no-unused-vars
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
export function Nav() {
  return (
    <div className="py-3 min-h-auto">
      {/* navバー */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-6xl font-bold">
                I love{' '}
                <a className="text-blue-500" href="../">
                  軽運送!
                </a>
              </h1>
            </div>
            <Link href="../profile">
              <a>
                <div className="hover:text-pink-500 ">自己紹介</div>
              </a>
            </Link >
            <Link href="../moving">
              <a>
                <div className="hover:text-green-500">引っ越し料金</div>
              </a>
            </Link>
            <Link href="../trans">
              <a>
                <div className="hover:text-blue-500">運送料金</div>
              </a>
            </Link>
            <Link href="../contact">
              <a>
                <div className="hover:text-yellow-500">お問い合わせ</div>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}