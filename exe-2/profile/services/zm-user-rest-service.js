(function () {

  'use strict';
  
  angular.module('app.user')
  .service('zmUserRestService',zmUserRestService);

  /** @ngInject */
  zmUserRestService.$inject = ['$http','$log','$q'];

  /** zmUserRestService is rest service for CURD */
  function zmUserRestService($http,$q,$log){
    var base_url = 'profile/contacts.json';
    var vm = this;
    /** Methods */
    vm.readListOfUser = readListOfUser;
    vm.readUser = readUser;
    vm.deleteUser = deleteUser;
    vm.addUser = addUser;
    vm.readPersonalDetails = readPersonalDetails;
    vm.updatePersonalDetails = updatePersonalDetails;
    vm.readCompanyDetails = readCompanyDetails;
    vm.updateCompanyDetails = updateCompanyDetails;

     /**
     * @name readListOfUser
     * @param 
     * @description Read list of user
     * @return {[data]}
     */
       function readListOfUser() {
        var defer = $q.defer();
        $http.get(base_url)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readUser
     * @param 
     * @description Read user details
     * @return {[data]}
     */
      function readUser(id) {
        var defer = $q.defer();
        $http.get(base_url+'/' + id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name deleteUser
     * @param id
     * @description Delete user from list
     * @return {[data]}
     */
      function deleteUser(id) {
        var defer = $q.defer();
        $http.delete(base_url+'/' + id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name addUser
     * @param data
     * @description Create a new user
     * @return {[data]}
     */
      function addUser(data) {
        var defer = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readPersonalDetails
     * @param data
     * @description Read user personal details
     * @return {[data]}
     */
      function readPersonalDetails(id) {
        var defer = $q.defer();
        $http.get(base_url, id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name updatePersonalDetails
     * @param data
     * @description Update user personal details
     * @return {[data]}
     */
      function updatePersonalDetails(data) {
        var defer = $q.defer();
        $http.put(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readCompanyDetails
     * @param data
     * @description Read company details
     * @return {[data]}
     */
      function readCompanyDetails(id) {
        var defer = $q.defer();
        $http.get(base_url, id)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name updateCompanyDetails
     * @param data
     * @description Update company details
     * @return {[data]}
     */
      function updateCompanyDetails(data) {
        var defer = $q.defer();
        $http.put(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };
    }
  })();