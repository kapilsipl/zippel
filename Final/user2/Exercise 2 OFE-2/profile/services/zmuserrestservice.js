(function () {
  //This is a zmUserRestService service for getting and possting details from controllers to rest service
  'use strict';
  // appUser is a sub module of application
  appUser
  .service('zmUserRestService',zmUserRestService);

  /** Injecting $http,$log,$q in zmUserRestService service  */
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
     * @param nothing
     * @description Read list of user
     * @return user list data
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
     * @param id
     * @description Read user details
     * @return user details data
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
     * @return delete user success or failure data
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
     * @param addUserData
     * @description Create a new user
     * @return new user data
     */
      function addUser(addUserData) {
        var defer = $q.defer();
        $http.post(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readPersonalDetails
     * @param id
     * @description Read user personal details
     * @return user personal details data
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
     * @param updatePersonalDetailsData
     * @description Update user personal details
     * @return updated user personal details data
     */
      function updatePersonalDetails(updatePersonalDetailsData) {
        var defer = $q.defer();
        $http.put(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };

     /**
     * @name readCompanyDetails
     * @param id // company id
     * @description Read company details
     * @return company details data
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
     * @param updateCompanyDetailsData
     * @description Update company details
     * @return updated company details data
     */
      function updateCompanyDetails(updateCompanyDetailsData) {
        var defer = $q.defer();
        $http.put(base_url, data)
        .success(function(data) {
          defer.resolve(data);
        }).error(defer.reject);
        return defer.promise;
      };
    }
  })();