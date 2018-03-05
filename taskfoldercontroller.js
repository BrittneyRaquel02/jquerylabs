(function (){
angular
.module('app')
.controller("ModelController", ModelController, function(DataFactory))
 function ModelController(){
  var vm = this;
  vm.listOfItems = DataFactory.getData() ||[];
  vm.addItem = function(listItem) {
    vm.listOfItems.push(listItem);
    DataFactory.setData(vm.listOfItems);
    vm.listItem = "";
}
  vm.remove =function(){
    vm.listOfItems.splice(this.index, 1);
  };

});

  })();
