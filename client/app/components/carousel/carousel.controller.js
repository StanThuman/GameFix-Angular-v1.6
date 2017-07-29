export default function CarouselController(){
  let vm = this;
  console.log("carousel controller");
  console.log(vm);




  //function declarations
  vm.slideTransition = slideTransition;



  function slideTransition( previousOrNext ){
    switch (previousOrNext) {
      case 0:
        $('.carousel').carousel('prev');
        break;

      case 1:
        $('.carousel').carousel('next');
        break;

      default:
        console.log('error with slide transition');
    }
  }
}
