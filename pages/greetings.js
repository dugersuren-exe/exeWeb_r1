import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const greetings = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              エクセについて
            </h2>
          </div>
        </div>
      </div>
      <div className="mr-4 ml-4 md:mr-20 md:ml-20">
        <p className="text-center text-lg font-medium text-gray-500 mb-10 mt-10">私ども、株式会社エクセは1991年8月6日に生まれました。 <br></br>それから20年、20世紀の最後の10年と21世紀の最初の10年の激動の中をブティックの投資事業会社として、時代の流れとともに前へ前へと進んでまいりました。</p>
        <h2 className="text-center underline underline-offset-4 font-bold text-2xl text-gray-600 mb-5">変化こそチャンスである</h2>
        <p className="text-center text-lg font-medium text-gray-500 mb-16">当社が常に掲げてきた信念は、「変化こそチャンスである」ということです。<br></br><br></br>時代の変化にたじろぐことなく、不安定化をむしろビジネスチャンスと捉えていくのが当社のスピリットです。そして投資にあたっては、真に社会が必要としているものは何なのかを見据え、世の中の大勢がなびく「今」に乗るのではなく、時代の「これから」を見つけ出してそこに投資をし、事業を起こし、更に育てていくことを基本的な方針としております。
        <br></br><br></br> この信念が結実したものが、ここでご紹介する国内及びアジアを中心とするプロジェクトです。<br></br><br></br> 当社は、ミャンマー、モンゴル、イスラエルなどで数多くのプロジェクトを完成・運営し、雇用を通じてこれらの国々のお手伝いをさせていただいております。</p>
        <h2 className="text-center underline underline-offset-4 font-bold text-2xl text-gray-600 mb-5">人材へのこだわり</h2>
        <p className="text-center text-lg font-medium text-gray-500 mb-10">当社が常に掲げてきた信念は、「変化こそチャンスである」ということです。<br></br><br></br>当社は人材への投資こそ最高の投資であると考えて、「自ら変化を求める人材」、「人と同じではなく自分なりの価値観を持っている人材」を常に求めております。
        <br></br><br></br> 安定した人生を求めるより、当社をステップに将来は独立して経営者を目指そうとするような人材を歓迎いたします。やる気のある若者を支援するために、当社は海外インターンシップを含めた実践研修の場も提供しております。<br></br><br></br> ユニークな投資事業会社として常に前進を続ける当社のことを是非知っていただき、応援していただきますようお願いいたします。</p>
        <p className="text-right text-lg font-medium text-gray-500">2017年9月吉日</p>
        <p className="text-right text-lg font-medium text-gray-500 mb-10">代表取締役社長　谷　均</p>

        {/* table1 */}
        <div className="grid justify-center">
          <div className="md:mt-20 border-2 border-black bg-darkblue h-14">
            <p className="text-center text-lg font-medium text-gray-400 mt-3">会社概要</p>
          </div>

          <div className="divide-black grid grid-cols-3 justify-center divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium m-3">企業名</div>
            <div className="col-span-2 p-4">株式会社エクセ（英文表記：EXE Corporation)</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium m-3">代表取締役社長</div>
            <div className="col-span-2 p-4">谷　均</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium md:m-6">所在地</div>
            <div className="col-span-2 p-4">東京都千代田区麹町1－10－5</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium mt-44 md:mt-20">海外事業所</div>
            <div className="col-span-2 p-4">ヤンゴン・オフィス（ミャンマー）<br></br>#0505 Sakura Tower, 339 Bogyoke Aung San Road, Kyauktada Township, Yangon, Myanmar
              <br></br>Tel: (951) 255 255 / Fax: (951) 255 258 / E-mail: stowersales@myanmar.com.mm
              <br></br><br></br>ウランバートル・オフィス～サナ・エクセ内～（モンゴル）<br></br>EXE Plaza, Tumurchnii Sreet 7/1, Chingeltei District, Ulaanbaatar 15171 Mongolia
              <br></br>Tel (976) 11 325552 / Fax (976) 11 325552 / E-mail info@exeplaza.mn</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium mt-4 md:mt-3">資本金</div>
            <div className="col-span-2 p-4">99,000,000円</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium mt-6 md:mt-3">事業内容</div>
            <div className="col-span-2 p-4">日本を含むアジアを中心とする投資および事業</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium m-6 md:m-3">従業員</div>
            <div className="col-span-2 p-4">約10人（本社）、約300人（海外グループ会社）</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-b-2 border-t-black border-r-black border-l-black border-b-black">
            <div className="text-center font-medium mt-44 md:mt-28">関連会社</div>
            <div className="col-span-2 p-4">EXE Sakura tower(シンガポール）：ミャンマー（ヤンゴン）におけるサクラタワーの経営
              <br></br>EXE Sakura Residence(シンガポール）：ミャンマー（ヤンゴン）におけるサクラレジデンスの経営
              <br></br>Sakura Thiripyitsaya（シンガポール）：ミャンマー（バガン）におけるティリピセヤ・サンクチュアリ・リゾートの経営
              <br></br>Sanaa EXE LLC（モンゴル）：モンゴル（ウランバートル）におけるエクセショッピングプラザの運営
              <br></br>Turquoise Financce（モンゴル）：ノンバンク
              <br></br>Olonlog EXE（モンゴル）：ITスクール</div>
          </div>
        </div>

         {/* table2 */}
         <div className="grid justify-center mt-10 mb-10">
          <div className="md:mt-20 border-2 border-black bg-darkblue h-14">
            <p className="text-center text-lg font-medium text-gray-400 mt-3">沿革</p>
          </div>

          <div className="divide-black grid grid-cols-3 justify-center divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium m-3">1991年</div>
            <div className="col-span-2 p-4">三菱商事㈱を退社後、投資事業会社の株式会社エクセを設立日本テレコムと共同で日本初の携帯電話事業会社を設立 </div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium m-3">1998年</div>
            <div className="col-span-2 p-4">ベトナムにて日本初のホテル事業を展開（現ホテル・ニッコー・ハノイ）</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium md:m-6">1999年</div>
            <div className="col-span-2 p-4">ミャンマーにて日本初のオフィスビル・ホテル事業を展開（現サクラタワー、ティリピセヤ・サンクチュアリ・リゾート）</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium mt-4 md:mt-3">2010年</div>
            <div className="col-span-2 p-4">モンゴルにて日本初の投資事業会社Sanaa EXE LLCを設立</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
            <div className="text-center font-medium mt-6 md:mt-3">2014年</div>
            <div className="col-span-2 p-4">イスラエルにて日本初の投資・不動産事業会社Cardboard Technologiesを設立</div>
          </div>

          <div className="divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-b-2 border-b-black border-r-black border-l-black">
            <div className="text-center font-medium m-6 md:m-3">2016年</div>
            <div className="col-span-2 p-4">モンゴルにて教育事業会社Olonlog EXEを設立金融事業へと展開を広げる</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default greetings;