import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Projects = () => {
  return (
    <div className="">
      <div>
        <h2 className="font-bold flex text-3xl mb-5 mt-5 text-gray-600 justify-center">
          お知らせ
        </h2>
        <div className="flex justify-center pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
              />
            </div>

            <div className="max-w-lg m-4">
              <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
              <h2 className="font-serif text-2xl text-gray-800 font-bold">
                お知らせです！
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl">
                ミャンマーを中心に医療、診断保険活動を行っている特定非営利活動法人ジャパンハートを継続的に支援しております。ジャパンハートの活動の詳細についてはWEBサイト．．．
              </p>
              <Link href="/bellsarge">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/assets/img/1659582198.jpg"
              loading="lazy"
              className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
            />
          </div>

          <div className="m-4 max-w-lg">
            <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
            <h2 className="font-serif text-2xl text-gray-800 font-bold ">
              お知らせです！
            </h2>
            <p className="font-light mt-2 font-sans text-gray-800 max-w-xl ">
              ミャンマーを中心に医療、診断保険活動を行っている特定非営利活動法人ジャパンハートを継続的に支援しております。ジャパンハートの活動の詳細についてはWEBサイト．．．
            </p>
            <Link href="/bellsarge">
              <a
                className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                もっと詳しく知る
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
