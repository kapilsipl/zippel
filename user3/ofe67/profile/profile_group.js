/** @ngApp */
var profileGroup = angular.module('group', [])
.controller('groupCtrl', groupCtrl);

/** @ngInject */
groupCtrl.$inject = ['zmProfileGroupService'];

/** ZmProfileGroupController is use to retrieve user list from services */
function groupCtrl(zmProfileGroupService) {
	var Ctrl = this;
	Ctrl.user = {
		id:''
	};

	/** group listing */
	Ctrl.readListOfGroups = function(){
		zmProfileGroupService.readListOfGroups(function(data){
			Ctrl.group = data;
		});
	}
	Ctrl.readGroupDetail = function(){
		zmProfileGroupService.readGroupDetail(function(id){
			Ctrl.users = data.lists.people;
		});
	}
	Ctrl.readListOfGroups();
	Ctrl.readGroupDetail();
}