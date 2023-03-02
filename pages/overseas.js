import React from "react";
import ImageGallery from 'react-image-gallery';

import Projects from "../components/Projects";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";



const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const overseas = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/yangon.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-5xl font-sans text-white uppercase">
            ミャンマープロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="p-12 mb-8 ">
        <h1 className="font-bold text-2xl text-gray-700">
          サクラタワー
        </h1>  
        <div className="flex">
        <div className="flex text-justify">         
          <p className=" basis-128 text-lg font-medium w-auto lg:h-[563px] ml-10 mr-6 mt-4 text-gray-600 max-w-2 xl ">
            サクラタワーは（株）日本設計、（株）鴻池組と、日本企業の手で1999年に完成しました。ヤンゴンのビジネス及び政治のまさに中心地区に位置し、総貸室面積12,425㎡、高さは地上約100mの20階建て耐震設計オフィスビルです。<br></br><br></br>
            地上1階～3階は総貸室面積1,183㎡の小売業エリアと なっており、主要航空会社のチケットオフィスや旅行代理店、歯医者、ショールームなどが入居しています<br></br><br></br>
            5階から19階にはJICA、三菱商事、日経、NHK等、グローバルに活躍する企業や団体が入居しています。<br></br><br></br>
            Address: 339 Bogyoke Aung San Road, Kyauktada Township, Yangon, Myanmar<br></br>
            Tel: (95 1) 255 255<br></br>
            E-mail: stowersales@myanmar.com.mm<br></br> Website: http://www.sakura-tower-yangon.com
          </p>
        </div>
          {/* slider */}
          <ImageGallery items={images} />
        </div>
        <div className="border border-white background-color: rgb(186 230 253) h-64">
        </div>
      </div>
    </MainLayout>
  );
};

export default overseas;