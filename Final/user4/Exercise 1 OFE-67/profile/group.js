/** @ngApp */
angular.module('app.group', [])
.controller('groupCtrl', groupCtrl);

/** @ngInject */
groupCtrl.$inject = ['zmProfileGroupService'];

/** ZmProfileGroupController is use to retrieve user list from services */
function groupCtrl(zmProfileGroupService) {
	var vm = this;
	vm.user = {
		id:''
	};

	/** Get group list from service */
	zmProfileGroupService.readListOfGroups(function(data){
		vm.group = data;
	});
	
	/** Get user list from service */
	zmProfileGroupService.readGroupDetail(function(id){
		vm.users = data.lists.people;
	});
}