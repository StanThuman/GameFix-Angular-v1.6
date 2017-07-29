export default function HomeController($http){

  console.log("inside home controller");
  var vm = this;

  vm.carouselMainImage = { src:'earthbound.jpg', alt: ''};
  vm.carouselImages = [
    { src:'dmc4.jpg', alt: ''},
    { src:'zelda.jpg', alt: ''}
  ];

  $http({
    method: 'GET',
    url: '/json'
  }).then(function successCallback(res){
    vm.imagePath = res.data.Name;
  },
  function errorCallback(res){
    console.log("error in callback for data");
  });

  //vm.imagePath = "this is my image path";

}

// class testClass{
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//   }
//
//   testFunction(){
//     console.log("test function");
//   }
//   set setX (x) { this.x = x }
//   get getX () { return this.x }
// }
//
// var testObject = {};
// console.log(testObject);
//
// testObject.name = "stanThuman";
// console.log(testObject);
//
// testObject.testFunction = () => {
//   console.log("inside test function");
// }
//
// var newObject = new testClass(3,4);
//
//
// console.log(testObject);
// console.log(newObject);
// console.log(newObject.x);
//
// console.log(newObject.setX = 30);
//
// console.log(newObject.getX);
// newObject.testFunction();
//
// testObject.testFunction();
