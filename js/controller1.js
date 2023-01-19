angular.module("module1", []).
controller("controller1", ["$scope", "$http", function($m, $h) {

  $m.nombre = "rafo";
  $m.edad = "30";
  $m.personas = [{
    nombre: "Pedro",
    edad: 30
  }, {
    nombre: "Juan",
    edad: 35
  }];
  $m.listanewusuarios = {
    id: 11,
    name: "n11"
  };
  $m.nuevapersona = {};
  $m.newusuario = {};
  $m.agregarPersona = function() {
    $m.personas.push($m.nuevapersona);
    $m.nuevapersona = {};
  };
  $m.usuarios = [];
  $m.getListaUsuarios = function() {
    $h({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then(function(response) {
      console.log(response);
      $m.usuarios = response.data;
    }, function(error) {

    });

  };
  $m.addUsuario = function() {
    $h({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      //  data: $m.listanewusuarios
      data: {
        id: $m.newusuario.id,
        name: $m.newusuario.name
      }
    }).then(function(response) {
      $m.usuarios.push($m.newusuario);
      $m.newusuario = {};
    }, function(error) {

    });

  };

}]);
