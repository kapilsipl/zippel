/** ZM profile group list */
(function () {

	'use strict';
  
/** zmProfileGroupList component is used to show the group list on page */
 groupApp
 .controller('ZmProfileGroupListCtrl',ZmProfileGroupListCtrl)
 .component('zmProfileGroupList', {
  templateUrl: 'zmprofilegrouplist.html',
  controller: ZmProfileGroupListCtrl,
  bindings: {
    group: '='
  }
 });

 /** Injecting zmProfileGroupService service in ZmProfileGroupListCtrl controller */
 ZmProfileGroupListCtrl.$inject = ['zmProfileGroupService'];

	/** ZmProfileGroupListCtrl is used to add, update, delete group details */
	function ZmProfileGroupListCtrl(zmProfileGroupList) {
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
     * @description Add new group
     * @return addUserData
     */
     function addGroup(addUserData){
      zmProfileGroupList.addGroup(addGroupData,function(data){
        vm.group = data;
      });
    }

     /**
     * @name updateGroup
     * @param index,updateGroupData
     * @description Update group details
     * @return updated group data
     */
     function updateGroup (index,updateGroupData){
      zmProfileGroupList.updateGroup(data,function(data){
        vm.group[index] = data;
      });
    }

     /**
     * @name deleteGroup
     * @param index,groupId
     * @description Delete group from list
     * @return data of success or failure delete group data
     */
     function deleteGroup(index,groupId){
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

});