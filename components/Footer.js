import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faAmbulance,
//   faAnchor,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-darkblue font-bold">
      <div className="sticky active:border-[3px] active:border-r-0 border-cyan-600 active:rounded my-[3px] hover:bg-rose-800 duration-150">
        <Link href="/contact"> 問い合わせ </Link>
      </div>
      <div className="bg-darkblue grid gap-1 grid-cols md:grid-cols-4 bg-neutral-800 w-full p-4 md:p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-">
          <h2 className="ml-4 underline text-white text-md mb-8">
            お問い合わせ
          </h2>

          <ul className=" text-gray-300 font-light pl-4 list-none w-full">
            <div className="flex">
              <svg
                className="lg:justify-start"
                fill="#ffff"
                height="25px"
                width="lg:20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 297 297"
              >
                <g>
                  <path
                    d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
		c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
		C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
		c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"
                  />
                  <path
                    d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
		c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
		c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
		C179.265,127.948,165.464,141.901,148.5,141.901z"
                  />
                </g>
              </svg>
              <li className="font-bold">
                〒102-0083 東京都千代田区麹町1-10-5 澤田麹町ビル6階
              </li>
            </div>
            <div className="flex mt-5">
              <svg
                className="mr-3 mt-1"
                fill="#ffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 473.806 473.806"
              >
                <g>
                  <g>
                    <path
                      d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z"
                    />
                    <path
                      d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z"
                    />
                    <path
                      d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                    />
                  </g>
                </g>
              </svg>

              <li className="font-bold">03-3288-2371</li>
            </div>
            <div className="flex mt-8">
              <svg
                className="mr-3"
                fill="#ffff"
                height="25px"
                width="lg:20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 75.294 75.294"
              >
                <g>
                  <path
                    d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
                  />
                </g>
              </svg>
              <li>
                {" "}
                <a
                  href="mailto:mail@exegroup.co.jp"
                  className="font-bold hover:text-blue-500"
                >
                  {" "}
                  mail@exegroup.co.jp{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="mr-2 font-bold max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            エクセについて
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2 ">社長メッセージ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporate">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">会社概要</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-bold max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 underline mb-5 text-white text-md ">
            プロジェクト
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/domestic">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">海外プロジェクト</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/myanmar">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ミャンマー</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mongolia">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">モンゴル</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mongolia">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">国内プロジェクト</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-bold max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="ml-9 mb-5 text-white text-md underline ">
            インターンシップ・採用
          </h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2 ">インターンシップ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporate">
                <a className="font-bold px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">新卒・中途採用</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a
        className="to-top-button show px-3 py-2 mb-16 mr-8 border text-[12px] bg-gray-300 rounded-lg duration-300 "
        href="#"
      >
        <i className="fa-sharp fa-solid fa-arrow-up"></i>
        {/* <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />
      <FontAwesomeIcon icon=" fa-arrow-up" /> */}
      </a>

      <div className="text-center text-sm font-bold bg-zinc-900 text-gray-300 p-2">
        Copyright © 2022 株式会社エクセ All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
