

const featuredProducts = [
    "/images/hero_1.png",
    "/images/hero_2.png",
    "/images/hero_3.png",
  ];
  
  let count = 0;
  let slideInterval;
  export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slideRef = useRef();
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("fade-anim");
    };
  
    useEffect(() => {
      slideRef.current.addEventListener("animationend", removeAnimation);
      slideRef.current.addEventListener("mouseenter", pauseSlider);
      slideRef.current.addEventListener("mouseleave", startSlider);
  
      startSlider();
      return () => {
        pauseSlider();
      };
      // eslint-disable-next-line
    }, []);
  
    const startSlider = () => {
      slideInterval = setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
  
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
  
    const handleOnNextClick = () => {
      count = (count + 1) % featuredProducts.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
      const productsLength = featuredProducts.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };}

    