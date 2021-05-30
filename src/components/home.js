import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import style from "../styles/home.module.css";

// components
import InsertValueSearch from "./insert";
import Images from "./image";
import Modal from "./modal";
import Loading from "./loading";

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

  function handleSearchSubmit(event) {
    event.preventDefault();
    toTheTop();
    setPageNow(1);
    createData(1, []);
  }

  function toTheTop() {
    window.scrollTo(0, 188);
  }

  async function createData(page = 1, array = imagesData) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/search?searchTerm=${searchInput}&page=${page}`
      );
      const allImages = await response.json();
      const newImagesData = [...array, ...allImages.hits];
      setTotalImagens(allImages.total);
      setPageNow((prevPageNow) => prevPageNow + 1);
      setImageData(newImagesData);
      setIsLoading(false);
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
    <div className={style.home}>
      <InsertValueSearch click={handleSearchSubmit} change={handleInputText} />
      <InfiniteScroll
        pageStart={1}
        loadMore={() => {
          if (isLoading) {
            return;
          }
          createData(pageNow);
        }}
        hasMore={typeof hasMore !== "number" ? hasMore : false}
      >
        <div>{imagesDOM}</div>
      </InfiniteScroll>
      {isLoading && <Loading />}
      {showModal && <Modal modalImage={showModal} close={handleCloseModal} />}
    </div>
  );
}

export default Home;
