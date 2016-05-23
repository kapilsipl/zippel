/** profile group start*/
(function () {
	'use strict';
profileGroup
 .controller('ZmProfileGroupController'['zmProfileGroupService',ZmProfileGroupController])
 .component('zmProfileGroup', {
		controller: ZmProfileGroupController,
		templateUrl: 'zm_profile_group.html',
		bindings: {
			userid: '='
		}
	});
	/** function to show data  */
	function ZmProfileGroupController(zmProfileGroupService) {
		var Ctrl = this;
		zmProfileGroupService.readGroupDetail(function(data){
			Ctrl.group = data;
		});
	}
});