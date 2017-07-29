import CardImageController from './card-image.controller.js';

export let CardImageComponent = {
  name: 'cardImage',

  component: {

    controller: CardImageController,
    bindings: {
      src: '=',
      text: '='
    },
    templateUrl: 'app/components/card-image/card-image.html'

  }
}
