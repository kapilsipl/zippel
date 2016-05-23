(function () {

  'use strict';

  angular.module('app.user')
  .service('zmUserService',zmUserService);

  /** @ngInject */
  zmUserService.$inject = ['$http','$log','$q','zmUserRestService'];
  
  /** zmUserService is service for CURD with dependinecies */
  function zmUserService($http,$log,$q,zmUserRestService){
    var vm = this;
    var defer = $q.defer();
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
     * @description Read list from user
     * @return {[data]}
     */
     function readListOfUser() {
      zmUserRestService.readListOfUser().then(function (response) {
       $log("server responded")
       defer.resolve(response.data);
     }, function(failure) {
      $log.error("server did not respond");
      return defer.reject(failure); 
    });
      return defer.promise;
    };

    /**
     * @name readUser
     * @param 
     * @description Read user details
     * @return {[data]}
     */
     function readUser(id) {
       zmUserRestService.readUser().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };
     
    /**
     * @name deleteUser
     * @param id
     * @description Delete user
     * @return {[data]}
     */
     function deleteUser(id) {
      zmUserRestService.deleteUser(id).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
      return defer.promise;
    };

    /**
     * @name addUser
     * @param data
     * @description Add a new user
     * @return {[data]}
     */
     function addUser(data) {
      zmUserRestService.addUser().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
      return defer.promise;
    };

    /**
     * @name updateUser
     * @param data
     * @description Update details of user
     * @return {[data]}
     */
     function updateUser(data) {
       zmUserRestService.updateUser(data).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };

     /**
     * @name readPersonalDetails
     * @param 
     * @description Read user personal details
     * @return {[data]}
     */
     function readPersonalDetails(id) {
       zmUserRestService.readPersonalDetails().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };

    /**
     * @name updatePersonalDetails
     * @param data
     * @description Update user personal details
     * @return {[data]}
     */
     function updatePersonalDetails(data) {
       zmUserRestService.updatePersonalDetails(data).then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };

    /**
     * @name readCompanyDetails
     * @param 
     * @description Read company details
     * @return {[data]}
     */
     function readCompanyDetails(id) {
       zmUserRestService.readCompanyDetails().then(function (response) {
        $log("server responded")
        defer.resolve(response.data);
      }, function(failure) {
        $log.error("server did not respond");
        return defer.reject(failure); 
      });
       return defer.promise;
     };
     
    /**
     * @name updateCompanyDetails
     * @param data
     * @description Update company details
     * @return {[data]}
     */
     function updateCompanyDetails(data) {
       zmUserRestService.updateCompanyDetails(data).then(function (response) {
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