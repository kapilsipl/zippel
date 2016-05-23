/** @ngApp */
// var groupApp = angular.module('app.group', []);
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
	zmProfileGroupService.readListOfGroups(function(data){
		vm.group = data;
	});
	zmProfileGroupService.readGroupDetail(function(id){
		vm.users = data.lists.people;
	});
}