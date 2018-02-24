(function (){
angular.module('app',[]).controller("ModelController", function(){
  var vm = this;
  vm.listOfItems = [];
  vm.addItem = function(listItem) {
    vm.listOfItems.push(listItem);
    vm.listItem = "";
  }

  function remove(){
    vm.listItem.splice(this.index, 1);
  }

});
})();
