(function () {
  'use strict';
  //groupApp is a sub module of Application 
  groupApp
  .service('zmProfileGroupRestService',zmProfileGroupRestService);

  /** Injecting $http,$log,$q angular service in custome zmProfileGroupRestService service  */
  zmProfileGroupRestService.$inject = ['$http','$log','$q'];

  /** zmProfileGroupRestService is REST service for CURD */
  function zmProfileGroupRestService($http,$q,$log){
    var base_url = 'profile/groups.json';
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
     * @param id // group id
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
     * @param addGroupData
     * @description Create a new group
     * @return new group data
     */
     function addGroup(addGroupData) {
      var defer = $q.defer();
      $http.post(base_url, data)
      .success(function(data) {
        defer.resolve(data);
      }).error(defer.reject);
      return defer.promise;
    };

     /**
     * @name updateGroup
     * @param updateGroupData
     * @description Update group details
     * @return group updated data
     */
     function updateGroup(updateGroupData) {
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
     * @description Delete group from list
     * @return data of success or failure
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
     * @param id,addUserData // Group id and addUserData
     * @description Add new user to group
     * @return new data of user 
     */
     function addUserToGroup(id,addUserData) {
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
     * @return data of success or failure
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