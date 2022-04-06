// vendors
import { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroller"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// components
import InsertValueSearch from "./search"
import Images from "./image"
import Modal from "./modal"
import Loading from "./loading"

// styles
import style from "../styles/home.module.css"

function Home() {
  const [imagesData, setImageData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [totalImages, setTotalImagens] = useState(null)
  const [pageNow, setPageNow] = useState(1)

  const [searchInput, setSearchInput] = useState("")

  function handleModal(url) {
    document.body.classList.add('disable-scroll')
    setIsModalOpen(!isModalOpen)
    setImage(url)
  }

  function handleCloseModal() {
    document.body.classList.remove('disable-scroll')
    setIsModalOpen(false)
  }

  function handleInputText(event) {
    setSearchInput(event.target.value)
  }

  function handleSearchSubmit(event) {
    event.preventDefault()
    toTheTop()
    setPageNow(1)
    createData(1, [])
  }

  function toTheTop() {
    window.scrollTo(0, 188)
  }

  async function createData(page = 1, array = imagesData) {
    setIsLoading(true)

    try {
      const response = await fetch(
        `/api/search?searchTerm=${searchInput}&page=${page}`
      )
      const allImages = await response.json()
      const newImagesData = [...array, ...allImages.hits]

      setTotalImagens(allImages.totalHits)
      setPageNow((prevPageNow) => prevPageNow + 1)
      setImageData(newImagesData)
      setIsLoading(false)
    } catch (error) {
      console.log("Erro: ", error)
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    createData(1)
  }, [])

  const imagesDOM =
    imagesData &&
    imagesData.map((obj) => (
      <Images
        key={obj.id}
        showImage={obj.webformatURL}
        click={() => handleModal(obj.largeImageURL)}
      />
    ))

  const hasMore =
    !!totalImages &&
    totalImages > imagesData.length &&
    !isLoading &&
    imagesData.length !== 0

  return (
    <div className={style.container}>
      <InsertValueSearch onSubmit={handleSearchSubmit} onChange={handleInputText} />

      <InfiniteScroll
        pageStart={1}
        loadMore={() => {
          if (isLoading) {
            return
          }

          createData(pageNow)
        }}
        hasMore={typeof hasMore !== "number" ? hasMore : false}
      >
        <ResponsiveMasonry
          className={style.imageContainer}
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1250: 4}}
        >
          <Masonry>
            {imagesDOM}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>

      {isLoading && <Loading />}

      {isModalOpen && <Modal modalImage={image} close={handleCloseModal} />}
    </div>
  )
}

export default Home
