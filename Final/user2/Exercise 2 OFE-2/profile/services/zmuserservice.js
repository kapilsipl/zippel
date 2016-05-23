(function () {

  'use strict';

  angular.module('app.user')
  .service('zmUserService',zmUserService);

  /** Injecting $http,$log,$q,zmUserRestService service in zmUserService */
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
     * @param nothing
     * @description Read list from user
     * @return user list data
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
     * @param id
     * @description Read user details
     * @return user details data
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
     * @return delete user data success or failure data
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
     * @param addUserData
     * @description Add a new user
     * @return new user data
     */
     function addUser(addUserData) {
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
     * @name updateUserData
     * @param data
     * @description Update details of user
     * @return updated user data
     */
     function updateUser(updateUserData) {
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
     * @param id // user id
     * @description Read user personal details
     * @return user personal details data
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
     * @param userPersonalDetailsData
     * @description Update user personal details
     * @return updated personal details data
     */
     function updatePersonalDetails(userPersonalDetailsData) {
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
     * @param id // company id
     * @description Read company details
     * @return user company details data
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
     * @return updated company details data
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