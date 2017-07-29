import CarouselController from './carousel.controller.js';

//let makes object immutable
export let CarouselComponent = {

  name: 'carousel',

  component: {

    controller: CarouselController,
    bindings: {
      carouselMainImage: '<',
      carouselImages: '<'
    },
    templateUrl: 'app/components/carousel/carousel.html'
  }
}
