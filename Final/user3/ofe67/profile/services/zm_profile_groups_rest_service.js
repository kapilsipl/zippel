/** profile group rest service start */
(function () {
  'use strict';
  profileGroup
  .service('zmProfileGroupRestService',['$http','$q',zmProfileGroupRestService]);

  /** service for edit/update/delete */
  function zmProfileGroupRestService($http,$q){
    var Ctrl = this;
    var defferd = $q.defer();

    /** read list of group */
    Ctrl.readListOfGroups = function readListOfGroups() {
      $http.get('profile/groups.json')
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** read group detail */
  Ctrl.readGroupDetail = function readGroupDetail(id) {
      $http.get('profile/groups.json/' + id)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** add group */
  Ctrl.addGroup = function addGroup(data) {
      $http.post('profile/groups.json', data)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** update group */
  Ctrl.updateGroup = function updateGroup(data) {
      $http.put('profile/groups.json/' + id, data)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** delete group */
  Ctrl.deleteGroup = function deleteGroup(id) {
      $http.delete('profile/groups.json/' + id)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** add user to group */
  Ctrl.addUserToGroup = function addUserToGroup(id,data) {
      $http.post('../profile/groups.json', data)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };

  /** remove user from group */
  Ctrl.removeUserFromGroup = function removeUserFromGroup(id,data) {
      $http.delete('../profile/groups.json', data)
      .success(function(data) {
        defferd.resolve(data);
    }).error(defferd.reject);
      return defferd.promise;
  };
}
})();