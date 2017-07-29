export default function NavBarController(){
  console.log('inside nav bar real controller');
  var vm = this;
  

  vm.linkTitle = ['Home', 'News', 'Videos'];

  //makes linkTitle array lowercase for link routes
  vm.links = (() => {
    var newArray = [];
     return vm.linkTitle.forEach(( element ) => {
      newArray.push(element.toLowerCase());
    });

    return newArray;
  })();
}
