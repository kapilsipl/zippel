/** Create a sub module for group section */
var groupApp = angular.module('app.group', [])
.controller('groupCtrl', groupCtrl);

/**  Inject zmProfileGroupService service in groupCtrl for calling function*/
groupCtrl.$inject = ['zmProfileGroupService'];

/** groupCtrl is used to get user list from services */
function groupCtrl(zmProfileGroupService) {
	var vm = this;
	vm.user = { // We will pass id here for getting user list
		id:''
	};

	/** Get group list from zmProfileGroupService service */
	zmProfileGroupService.readListOfGroups(function(data){
		vm.group = data;
	});
	
	/** Get user list from zmProfileGroupService service by id */
	zmProfileGroupService.readGroupDetail(id,function(data){
		vm.users = data.lists.people;
	});
}