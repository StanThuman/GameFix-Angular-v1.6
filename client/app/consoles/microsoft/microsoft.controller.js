export default function MicrosoftController() {
  console.log("inside microsfot controller");
  var vm = this;
  vm.carouselMainImage = { src: 'dmc4.jpg', alt: ''}
  vm.carouselImages = [
    { src: 'earthbound.jpg', alt: ''},
    { src: 'zelda.jpg', alt: ''}
  ]

}
