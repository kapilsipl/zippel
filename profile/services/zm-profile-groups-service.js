(function () {
  'use strict';
  angular.module('groupApp')
  .service('zmProfileGroupService',zmProfileGroupService);

  /** @ngInject */
  zmProfileGroupService.$inject = ['$http','$q','zmProfileGroupRestService'];
  
  /** zmProfileGroupService is service for CURD with dependinecies */
  function zmProfileGroupService($http,$q,zmProfileGroupRestService){
    var vm = this;
    /** Methods */
    vm.readListOfGroups = readListOfGroups;
    vm.readGroupDetail = readGroupDetail;
    vm.deleteGroup = deleteGroup;
    vm.addGroup = addGroup;
    vm.updateGroup = updateGroup;
    vm.addUserToGroup = addUserToGroup;
    vm.removeUserFromGroup = removeUserFromGroup;

    /**
    * Read list of group
    */
    function readListOfGroups() {
     return zmProfileGroupRestService.readListOfGroups().then(function (response) {
         $log("server responded")
         defer.resolve(response.data);
     }, function(failure) {
        $log.error("server did not respond");
        return $q.reject(failure); 
    });
     return defer.promise;
    };

    /**
    * Read group details
    */
    function readGroupDetail(id) {
     return zmProfileGroupRestService.readGroupDetail().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
    }, function(failure) {
        $log.error("server did not respond");
        return $q.reject(failure); 
    });
     return defer.promise;
    };

    /**
    * Add group
    */
    function addGroup(data) {
      return zmProfileGroupRestService.addGroup().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
    }, function(failure) {
        $log.error("server did not respond");
        return $q.reject(failure); 
    });
      return defer.promise;
    };

    /**
    * Update group
    */
    function updateGroup(data) {
       return zmProfileGroupRestService.updateGroup(data).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
    }, function(failure) {
        $log.error("server did not respond");
        return $q.reject(failure); 
    });
       return defer.promise;
    };

    /**
    * Delete group
    */
    function deleteGroup(id) {
      return zmProfileGroupRestService.deleteGroup(id).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
    }, function(failure) {
        $log.error("server did not respond");
        return $q.reject(failure); 
    });
      return defer.promise;
    };

    /**
    * Add user to group
    */
    function addUserToGroup(data) {
      return zmProfileGroupRestService.addUserToGroup(id,data).then(function (response) {
         $log("server responded")
         defer.resolve(response.data);
     }, function(failure) {
         $log.error("server did not respond");
         return $q.reject(failure); 
     });
      return defer.promise;
    };

    /**
    * Remove user from group
    */
    function removeUserFromGroup(id,data) {
      return zmProfileGroupRestService.removeUserFromGroup(id,data).then(function (response) {
         $log("server responded")
         defer.resolve(response.data);
     }, function(failure) {
         $log.error("server did not respond");
         return $q.reject(failure); 
     });
      return defer.promise;
    };
 };
})();