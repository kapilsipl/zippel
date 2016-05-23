/** Application module user */
var profileUser = angular.module('user', [])
.controller('userCtrl', ['zmUserService', userCtrl]);

/** showing user list through services */
function userCtrl(zmUserService) {
	var Ctrl = this;
	Ctrl.user = {id:''};
}