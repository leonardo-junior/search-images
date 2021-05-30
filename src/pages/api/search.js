async function searchImages(req, res) {
  const apiSecret = process.env.PIXABAY_API_SECRET;

  const { searchTerm, page } = req.query;

  const url = `https://pixabay.com/api/?key=${apiSecret}&q=${searchTerm}&image_type=all&order=latest&page=${page}`;
  const response = await fetch(url);
  const imagesJson = await response.json();

  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  res.json(imagesJson);
}

export default searchImages;
