export default function NintendoController(){

  console.log('nintendo controller');

  var vm = this;
  vm.carouselMainImage = { src: 'dmc4.jpg', alt: ''}
  vm.carouselImages = [
    { src: 'earthbound.jpg', alt: ''},
    { src: 'zelda.jpg', alt: ''}
  ]

  vm.imgesAndText = [
    { src: 'fifa.jpg', text: 'texdsfdsfsdt'},
    { src: 'witcher3.jpg', text: 'tefsdfsdxt'},
    { src: 'fifa.jpg', text: 'texfsdfsdfsdt'},
    { src: 'witcher3.jpg', text: 'tefcsdfdfsdxt'}
  ];

  console.log(this);
  
}
