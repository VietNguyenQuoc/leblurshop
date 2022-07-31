import Head from "next/head";
import ProductTile from "../components/product-tile";
import productListRaw from "../data/product-list.txt";

const productList = productListRaw
  .split("\n")
  .filter((line) => {
    return !!line && !line.startsWith("#");
  })
  .map((item) => {
    const [productUrl, imgUrl, title] = item.split("-");

    return {
      productUrl: productUrl.trim(),
      imgUrl: imgUrl.trim(),
      title: title?.trim(), // title could be null
    };
  });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leblurshop</title>
        <meta name="description" content="Mua hàng tại Leblurshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-blue-700 text-6xl font-extralight text-center">
          Leblurshop
        </h1>
        <div className="contact-us bg-slate-700 text-white text-center mt-20 py-8">
          <h2 className="text-2xl">Liên hệ nhân viên tư vấn</h2>
          <div className="flex gap-20 justify-center mt-8">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-16"
            >
              <img src="messenger_64.png" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-16"
            >
              <img src="instagram_64.png" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-16"
            >
              <img src="zalo.png" />
            </a>
          </div>

          <div className="social flex justify-center gap-8 mt-12">
            <a className="flex gap-6 items-center bg-blue-800 w-fit py-3 px-8 rounded-xl">
              <svg
                className="fill-white h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="88.428 12.828 107.543 207.085"
              >
                <path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" />
              </svg>
              <span className="font-bold text-2xl">Xem thêm tại Facebook</span>
            </a>
            <a className="flex gap-6 items-center bg-shopee w-fit py-3 px-8 rounded-xl">
              <img src="shopee.png" className="h-16" />
              <span className="font-bold text-2xl">Xem thêm tại Shopee</span>
            </a>
          </div>
        </div>
        <div className="product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly mt-20">
          {productList.map(({ productUrl, imgUrl, title }, index) => (
            <ProductTile
              key={index}
              url={productUrl}
              imgUrl={imgUrl}
              title={title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
