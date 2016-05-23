/** profile group list */
(function () {
  'use strict';
profileGroup
 .controller('ZmProfileGroupListController',['zmProfileGroupService',ZmProfileGroupListController])
 .component('zmProfileGroupList', {
      controller: ZmProfileGroupListController,
      templateUrl: 'zm_profile_group_list.html',
      bindings: {
        group: '='
      }
 });
	/** function is used to add, update, delete group details */
	function ZmProfileGroupListController(zmProfileGroupList) {
		var Ctrl = this;
		zmProfileGroupList.readListOfGroups(function(data){
        Ctrl.group = data;
   });
    /** add group */
    Ctrl.addGroup = function addGroup(addUserData){
        zmProfileGroupList.addGroup(addGroupData,function(data){
            Ctrl.group = data;
        });
    }

    /** update group */
    Ctrl.updateGroup = function updateGroup (index,updateGroupData){
        zmProfileGroupList.updateGroup(data,function(data){
            Ctrl.group[index] = data;
        });
    }

    /** add group */
    Ctrl.deleteGroup = function deleteGroup(index,id){
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