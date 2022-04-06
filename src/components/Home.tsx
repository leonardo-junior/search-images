// vendors
import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import InfiniteScroll from "react-infinite-scroller"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// components
import InsertValueSearch from "./Search"
import Images from "./Image"
import Modal from "./Modal"
import Loading from "./Loading"

// styles
import styles from "../styles/Home.module.scss"

type ImagesProps = {
id: number
webformatURL: string
largeImageURL: string
}

type ResponseImageProps = {
  hits: ImagesProps[]
  totalHits: number
}

function Home() {
  const [imagesData, setImageData] = useState<ImagesProps[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [totalImages, setTotalImagens] = useState<number>(null)
  const [pageNow, setPageNow] = useState(1)

  const [searchInput, setSearchInput] = useState("")

  function handleModal(url: string) {
    document.body.classList.add('disable-scroll')
    setIsModalOpen(!isModalOpen)
    setImage(url)
  }

  function handleCloseModal() {
    document.body.classList.remove('disable-scroll')
    setIsModalOpen(false)
  }

  function handleInputText(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault()
    toTheTop()
    setPageNow(1)
    createData(1, [])
  }

  function toTheTop() {
    window.scrollTo(0, 0)
  }

  async function createData(page = 1, data = imagesData) {
    setIsLoading(true)

    try {
      const response = await fetch(
        `/api/search?searchTerm=${searchInput}&page=${page}`
      )
      const allImages: ResponseImageProps = await response.json()
      const newImagesData = [...data, ...allImages.hits]

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
        image={obj.webformatURL}
        onClick={() => handleModal(obj.largeImageURL)}
      />
    ))

  const hasMore =
    !!totalImages &&
    totalImages > imagesData.length &&
    !isLoading &&
    imagesData.length !== 0

  return (
    <div className={styles.container}>
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
          className={styles.imageContainer}
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1250: 4}}
        >
          <Masonry>
            {imagesDOM}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>

      {isLoading && <Loading />}

      {isModalOpen && <Modal image={image} onClick={handleCloseModal} />}
    </div>
  )
}

export default Home
