/** Zm profile group is a controller for zm-profile-group component */
(function () {

	'use strict';
   // zmProfileGroup component is used show the group details. 
	angular.module('app.group')
	.controller('ZmProfileGroupController',ZmProfileGroupController)
	.component('zmProfileGroup', {
		templateUrl: 'zm-profile-group.html',
		controller: ZmProfileGroupController,
		bindings: {
			userid: '='
		}
	});

	/** @ngInject */
	ZmProfileGroupController.$inject = ['zmProfileGroupService'];
	/** ZmProfileGroupController is use to retrieve user list from services  */
	function ZmProfileGroupController(zmProfileGroupService) {
		var vm = this;
		this.$onInit = function() {
		zmProfileGroupService.readGroupDetail(function(data){
			vm.group = data;
		});
	};
	}

});