import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Sharedhouse = () => {
  return (
    <div className="flex justify-center m-0 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
        <div>
          <h2 className="font-serif text-3xl text-gray-600 font-bold mt-12 ml-4">
            モンゴルプロジェクト
          </h2>
          <p className="font-medium mt-8 font-sans text-xl text-gray-500 max-w-lg mx-4">
            2010年に日本初の投資事業会社Sanaa EXE
            LLCを設立し、不動産投資事業、金融事業、教育事業を展開しています。エクセプラザ、Olonglong」スクールを運営しています。
          </p>
          <Link href="/mongolia">
            <button
              className="inline-block lg:ml-6 px-14 ml-4 py-3 lg:mt-20 mt-10 mb-10 bg-darkblue text-gray-400 font-extrabold text-base leading-snug uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              詳細はこちら
            </button>
          </Link>
        </div>

        <div>
          <img
            src="/assets/img/1659582198.jpg"
            loading="lazy"
            className=" md:w-[560px] md:h-[350px] lg:ml-4 transition duration-300 ease-linear align-middle "
          />
        </div>
      </div>
    </div>
  );
};

export default Sharedhouse;
