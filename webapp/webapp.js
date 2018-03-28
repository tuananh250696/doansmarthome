angular.module('myApp', [
    'ngRoute',
    'mobile-angular-ui',
	'btford.socket-io'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'Home'
    });
}).factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
	
/////////////////////// Những dòng code ở trên phần này là phần cài đặt, các bạn hãy đọc thêm về angularjs để hiểu, cái này không nhảy cóc được nha!
}).controller('Home', function($scope, mySocket) {
	////Khu 1 -- Khu cài đặt tham số 
    //cài đặt một số tham số test chơi
	//dùng để đặt các giá trị mặc định
         <input type="text" id="ip" class="ip" placeholder="ip theo code adruino"></input><br>
	$scope.buttons = [] //arduino gửi thì nhận 
      	$scope.se=[2]
	var ip = 2222;
	////Khu 2 -- Cài đặt các sự kiện khi tương tác với người dùng
	//các sự kiện ng-click, nhấn nút
	
	
	$scope.upt5  = function(){
		mySocket.emit("LED1ON"+ip)
	}
	$scope.upt51  = function(){
		mySocket.emit("LED1OFF")
	}
	$scope.upt6  = function(){
		mySocket.emit("LED2ON")
	}
	$scope.upt61  = function(){
		mySocket.emit("LED2OFF")
	}
	$scope.upt7  = function(){
		mySocket.emit("LED3ON")
	}
	$scope.upt71  = function(){
		mySocket.emit("LED3OFF")
	}
	$scope.upt8  = function(){
		mySocket.emit("LED4ON")
	}
	$scope.upt81  = function(){
		mySocket.emit("LED4ON")
	}
	
	
		
});
