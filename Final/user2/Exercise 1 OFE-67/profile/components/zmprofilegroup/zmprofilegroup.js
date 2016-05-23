/** Zm profile group */
(function () {

	'use strict';
	
    // zmProfileGroup component is used show the group details. 
	groupApp
	.controller('ZmProfileGroupCtrl',ZmProfileGroupCtrl)
	.component('zmProfileGroup', {
		templateUrl: 'zmprofilegroup.html',
		controller: ZmProfileGroupCtrl,
		bindings: {
			userid: '='
		}
	});

	/** @ngInject */
	ZmProfileGroupCtrl.$inject = ['zmProfileGroupService'];
	/** ZmProfileGroupCtrl is use to retrieve user list from services  */
	function ZmProfileGroupCtrl(zmProfileGroupService) {
		var vm = this;
		zmProfileGroupService.readGroupDetail(function(data){
			vm.group = data;
		});
	}

	
});