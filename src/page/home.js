import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

// components
import InsertValueSearch from "../components/insert.js";
import Images from "../components/image.js";
import Modal from "../components/modal.js";
import Loading from "../components/loading.js";

function Home() {
  const [imagesData, setImageData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImagens] = useState(null);
  const [pageNow, setPageNow] = useState(1);

  const [searchInput, setSearchInput] = useState("");

  function handleModal(url) {
    setShowModal(url);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleInputText(event) {
    setSearchInput(event.target.value);
  }

  function handleSearchClick() {
    toTheTop();
    setPageNow(1);
    createData(1, []);
  }

  function toTheTop() {
    window.scrollTo(0, 0);
  }

  function createData(page = 1, array = imagesData) {
    try {
      const url = `https://pixabay.com/api/?key=21774120-7809fe0f002d0dff77473de06&q=${searchInput}&image_type=all&order=latest&page=${page}`;
      async function fetchData() {
        const response = await fetch(url);
        const allImages = await response.json();
        const newImagesData = [...array, ...allImages.hits];
        setTotalImagens(allImages.total);
        setPageNow((prevPageNow) => prevPageNow + 1);
        setImageData(newImagesData);
        setIsLoading(false);
      }

      setIsLoading(true);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }

  const imagesDOM =
    imagesData &&
    imagesData.map((obj) => (
      <Images
        key={obj.id}
        showImage={obj.webformatURL}
        click={() => handleModal(obj.largeImageURL)}
      />
    ));

  const hasMore =
    totalImages &&
    totalImages > imagesData.length &&
    !isLoading &&
    imagesData.length !== 0;

  return (
    <div>
      <InsertValueSearch click={handleSearchClick} change={handleInputText} />
      <InfiniteScroll
        pageStart={1}
        loadMore={() => {
          if (isLoading) {
            return;
          }
          createData(pageNow);
        }}
        hasMore={hasMore}
        // useWindow={false}
      >
        <div>{imagesDOM}</div>
      </InfiniteScroll>
      {isLoading && <Loading />}
      {showModal && <Modal modalImage={showModal} close={handleCloseModal} />}
    </div>
  );
}

export default Home;
