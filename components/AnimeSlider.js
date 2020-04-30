import Slider from "react-slick"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
}

const AnimeSlider = ({children}) => (
  <Slider {...settings}>
    {children}
  </Slider>
)

export default AnimeSlider