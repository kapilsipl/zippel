(function () {

  'use strict';
 // groupApp is a sub module of Application
  groupApp
  .service('zmProfileGroupService',zmProfileGroupService);

  /** Injecting  $http,$log,$q zmProfileGroupRestService services in zmProfileGroupService service*/
  zmProfileGroupService.$inject = ['$http','$log','$q','zmProfileGroupRestService'];
  
  /** zmProfileGroupService is service for CURD with dependinecies */
  function zmProfileGroupService($http,$log,$q,zmProfileGroupRestService){
    var vm = this;
    var defer = $q.defer();
    /** Methods */
    vm.readListOfGroups = readListOfGroups;
    vm.readGroupDetail = readGroupDetail;
    vm.deleteGroup = deleteGroup;
    vm.addGroup = addGroup;
    vm.updateGroup = updateGroup;
    vm.addUserToGroup = addUserToGroup;
    vm.removeUserFromGroup = removeUserFromGroup;

    /**
     * @name readListOfGroups
     * @param nothing
     * @description Read list of group
     * @return group list data
     */
     function readListOfGroups() {
      zmProfileGroupRestService.readListOfGroups().then(function (response) {
       $log("server responded")
       defer.resolve(response.data);
     }, function(failure) {
      $log.error("server did not respond");
      return defer.reject(failure); 
    });
      return defer.promise;
    };

    /**
     * @name readGroupDetail
     * @param id
     * @description Read group detail
     * @return group detail data
     */
     function readGroupDetail(id) {
       zmProfileGroupRestService.readGroupDetail().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };

    /**
     * @name addGroup
     * @param addGroupData
     * @description Create a new group
     * @return added group data
     */
     function addGroup(addGroupData) {
      zmProfileGroupRestService.addGroup().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
      return defer.promise;
    };

    /**
     * @name updateGroup
     * @param data
     * @description Update group
     * @return updated group data
     */
     function updateGroup(data) {
       zmProfileGroupRestService.updateGroup(data).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };

    /**
     * @name deleteGroup
     * @param id
     * @description Delete group from list
     * @return delete group data
     */
     function deleteGroup(id) {
      zmProfileGroupRestService.deleteGroup(id).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
      return defer.promise;
    };

    /**
     * @name addUserToGroup
     * @param addUserToGroupData
     * @description Add new user to group
     * @return group user added data
     */
     function addUserToGroup(addUserToGroupData) {
      zmProfileGroupRestService.addUserToGroup(id,data).then(function (response) {
       $log("server responded")
       defer.resolve(response.data);
     }, function(failure) {
       $log.error("server did not respond");
       return defer.reject(failure); 
     });
      return defer.promise;
    };

    /**
     * @name removeUserFromGroup
     * @param id,data // group id and user ids data
     * @description Remove user from group
     * @return delete data response
     */
     function removeUserFromGroup(id,data) {
      zmProfileGroupRestService.removeUserFromGroup(id,data).then(function (response) {
       $log("server responded")
       defer.resolve(response.data);
     }, function(failure) {
       $log.error("server did not respond");
       return defer.reject(failure); 
     });
      return defer.promise;
    };
  };

})();