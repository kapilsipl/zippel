(function () {
  'use strict';
  angular.module('groupApp')
  .service('zmProfileGroupRestService',zmProfileGroupRestService);

  /** @ngInject */
  zmProfileGroupRestService.$inject = ['$http','$log','$q'];

  /** zmProfileGroupRestService is rets service for CURD */
  function zmProfileGroupRestService($http,$q,$log){
    var base_url = 'profile/group.json';
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
     * @name readListOfGroups
     * @param 
     * @description Read list from group
     * @return {[data]}
     */
       function readListOfGroups() {
        var defer = $q.defer();
        $http.get(base_url)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readGroupDetail
     * @param 
     * @description Read group detail
     * @return {[data]}
     */
      function readGroupDetail(id) {
        var defer = $q.defer();
        $http.get(base_url+'/' + id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name addGroup
     * @param data
     * @description Create a new group
     * @return {[data]}
     */
      function addGroup(data) {
        var defer = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name updateGroup
     * @param data
     * @description Update group
     * @return {[data]}
     */
      function updateGroup(data) {
        var defer = $q.defer();
        $http.put(base_url+'/' + id, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name deleteGroup
     * @param id
     * @description Delete group
     * @return {[data]}
     */
      function deleteGroup(id) {
        var defer = $q.defer();
        $http.delete(base_url+'/' + id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };
      
     /**
     * @name addUserToGroup
     * @param data
     * @description Add user to group
     * @return {[data]}
     */
      function addUserToGroup(id,data) {
        var defer = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name removeUserFromGroup
     * @param id,data
     * @description Remove user from group
     * @return {[data]}
     */
      function removeUserFromGroup(id,data) {
        var defer = $q.defer();
        $http.delete(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };
    }
  })();
