export default function ProductTile({
  url = "https://shopee.vn/leblurshop",
  imgUrl,
  title = "Mua tại Shopee",
}) {
  return (
    <div className="w-64">
      <img className="w-full h-64" src={imgUrl} />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-full block text-center bg-shopee text-white font-semibold text-lg px-2 py-2 mt-8"
      >
        {title}
      </a>
    </div>
  );
}
