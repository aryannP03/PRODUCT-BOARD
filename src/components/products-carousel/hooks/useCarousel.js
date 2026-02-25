import {useCallback, useRef} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
function useCarousel() {
    
    const autoplay = useRef(
        Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
      },
    [autoplay.current])
    
      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    
     
    return { emblaRef, scrollPrev, scrollNext }
}

export default useCarousel
