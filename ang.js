
(function (){
angular
.module('app',[])
.controller("ModelController",ModelController)
 function ModelController(){
  var vm = this;
  vm.listOfItems = [];
  vm.addItem = function(listItem) {
    vm.listOfItems.push(listItem);
    vm.listItem = "";
  }

  vm.remove =function(){
    vm.listOfItems.splice(this.index, 1);
  }

};

})();
