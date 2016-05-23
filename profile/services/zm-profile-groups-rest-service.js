(function () {
  'use strict';
  angular.module('groupApp')
  .service('zmProfileGroupRestService',zmProfileGroupRestService);

  /** @ngInject */
  zmProfileGroupRestService.$inject = ['$http','$q'];

  /** zmProfileGroupRestService is rets service for CURD */
  function zmProfileGroupRestService($http,$q){
    var base_url = 'group.json';
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
        var deferred = $q.defer();
        $http.get(base_url)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };

      /**
       * Read group details
       */
      function readGroupDetail(id) {
        var deferred = $q.defer();
        $http.get(base_url+'/' + id)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };

      /**
       * Add new group
       */
      function addGroup(data) {
        var deferred = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };

      /**
       * update group
       */
      function updateGroup(data) {
        var deferred = $q.defer();
        $http.put(base_url+'/' + id, data)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };

      /**
       * Delete group
       */
      function deleteGroup(id) {
        var deferred = $q.defer();
        $http.delete(base_url+'/' + id)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };
      
      /**
       * Add user to group
       */
      function addUserToGroup(id,data) {
        var deferred = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };

      /**
       * Remove user from group
       */
      function removeUserFromGroup(id,data) {
        var deferred = $q.defer();
        $http.delete(base_url, data)
        .success(function(data) {
          deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
      };
    }
  })();
