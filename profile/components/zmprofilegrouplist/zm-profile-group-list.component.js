/** ZM profile group list */
(function () {
	'use strict';
	/** ZmProfileGroupListController is used to add, update, delete group details */
	function ZmProfileGroupListController(zmProfileGroupList) {
		var vm = this;
		/** Methods */
		vm.addGroup    = addGroup;
		vm.updateGroup = updateGroup;
		vm.deleteGroup = deleteGroup;
		zmProfileGroupList.readListOfGroups(function(data){
     vm.group = data;
   });

     /**
     * @name addGroup
     * @param data
     * @description Add group
     * @return {[data]}
     */
     function addGroup(addUserData){
      zmProfileGroupList.addGroup(addGroupData,function(data){
        vm.group = data;
      });
    }

     /**
     * @name updateGroup
     * @param data
     * @description Update group
     * @return {[data]}
     */
     function updateGroup (index,updateGroupData){
      zmProfileGroupList.updateGroup(data,function(data){
        vm.group[index] = data;
      });
    }

     /**
     * @name updateGroup
     * @param data
     * @description Delete group
     * @return {[data]}
     */
     function deleteGroup(index,id){
      zmProfileGroupList.deleteGroup(id,function(data){
        if(data.status==true){
          angular.forEach(groups, function(value, key) {
            if(value['groupid']==id){
              group.splice(i,1);
            }
          })
        }
      });
    }

  }

/**
 * zmProfileGroupList component is used to show the group list on page
 */
 angular.module('app.group')
 .controller('ZmProfileGroupListController',ZmProfileGroupListController)
 .component('zmProfileGroupList', {
 	templateUrl: 'zm-profile-group-list.html',
 	controller: ZmProfileGroupListController,
 	bindings: {
 		group: '='
 	}
 });
 /** @ngInject */
 ZmProfileGroupDetailsController.$inject = ['zmProfileGroupService'];
});