(function(){
  angular.module('app')
  .factory('DataFactory', function(){
    var data;
    return{
     setData: setData,
     getdata: getData
    };
    function setData (newData){
      data= newData;
    }
function getData(){
  return data;
}

  });
})();
