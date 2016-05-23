/** userApp is a sub module of an application */
var userApp = angular.module('app.user', [])
.controller('userCtrl', userCtrl);

/** Injecting  zmUserService in userCtrl Controler*/
userCtrl.$inject = ['zmUserService'];

/** userCtrl is use to retrieve user list from services */
function userCtrl(zmUserService) {
	var vm = this;
	vm.user = {
		id:''
	};
}