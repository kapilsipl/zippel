(function () {

  'use strict';

  angular.module('groupApp')
  .service('zmProfileGroupService',zmProfileGroupService);

  /** @ngInject */
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
     * @param 
     * @description Read list from group
     * @return {[data]}
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
     * @param 
     * @description Read group detail
     * @return {[data]}
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
     * @param data
     * @description Create a new group
     * @return {[data]}
     */
     function addGroup(data) {
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
     * @return {[data]}
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
     * @description Delete group
     * @return {[data]}
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
     * @param data
     * @description Add user to group
     * @return {[data]}
     */
     function addUserToGroup(data) {
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
     * @param id,data
     * @description Remove user from group
     * @return {[data]}
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