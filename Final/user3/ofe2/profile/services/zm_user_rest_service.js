(function () {
  'use strict';
profileUser
  .service('zmUserRestService',['$http','$q', zmUserRestService]);

  /** function use for edit/update/delete */
  function zmUserRestService($http,$q){
    var Ctrl = this;
    var defferd = $q.defer();
    /** read list of user */
    Ctrl.readListOfUser = function readListOfUser() {
        $http.get('profile/contacts.json')
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** edit user */
    Ctrl.readUser = function readUser(id) {
        $http.get('profile/contacts.json/' + id)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** delete user */
    Ctrl.deleteUser = function deleteUser(id) {
        $http.delete('profile/contacts.json/' + id)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** add user */
    Ctrl.addUser = function addUser(data) {
        $http.post('profile/contacts.json', data)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** edit personal details */
    Ctrl.readPersonalDetails = function readPersonalDetails(id) {
        $http.get('profile/contacts.json', id)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** update personal details */
    Ctrl.updatePersonalDetails = function updatePersonalDetails(data) {
        $http.put('profile/contacts.json', data)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** edit company details */
    Ctrl.readCompanyDetails = function readCompanyDetails(id) {
        $http.get('profile/contacts.json', id)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };

    /** update personal details */
    Ctrl.updateCompanyDetails = function updateCompanyDetails(data) {
        $http.put('profile/contacts.json', data)
        .success(function(data) {
          defferd.resolve(data);
      }).error(defferd.reject);
        return defferd.promise;
    };
}
})();