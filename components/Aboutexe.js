import React from "react";
import Link from "next/link";

const Aboutexe = () => {
  return (
    <div className="lg:flex justify-center m-0 md:p-16">
      <div className="">
        <div>
          <img
            src="/assets/img/2.JPG"
            className="w-[500px] mt-5 h-auto max-h-96 transition duration-300 ease-linear align-middle "
            loading="lazy"
          />
        </div>
      </div>
      <div className="mx-auto md:pl-16">
        <div>
          <h2 className="font-serif text-2xl text-gray-600 font-semibold mt-4 text-left mx-3">
            エクセについて
          </h2>
          <p className="mt-10 text-gray-800 max-w-xl m-4 md:mr-16 font-medium">
            私ども、株式会社エクセは1991年8月6日に生まれました。<br></br>{" "}
            それから30年、 20世紀の最後の10年と21世紀の最初の<br></br>{" "}
            20年の激動の中をブティックの投資事業会社として、時代の流れとともに前へ前へと進んでまいりました。
          </p>
        </div>

        <Link href="/greetings">
          <a
            className="inline-block ml-[250px] px-14 py-3 mb-10 mt-3 bg-darkblue text-gray-400 font-extrabold text-base leading-snug uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            詳細はこちら
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Aboutexe;
