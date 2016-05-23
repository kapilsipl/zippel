/** @ngApp */
angular.module('app.user', [])
.controller('userCtrl', userCtrl);

/** @ngInject */
userCtrl.$inject = ['zmUserService'];

/** userCtrl is use to retrieve user list from services */
function userCtrl(zmUserService) {
	var vm = this;
	vm.user = {
		id:''
	};
}