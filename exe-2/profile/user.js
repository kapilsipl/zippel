/** @ngApp */
angular.module('app.user', [])
.controller('userCtrl', userCtrl);
/** @ngInject */
userCtrl.$inject = ['zmProfileUserService'];

/** userCtrl is use to retrieve user list from services */
function userCtrl(zmProfileUserService) {
	var vm = this;
	vm.user = {
		id:''
	};
}