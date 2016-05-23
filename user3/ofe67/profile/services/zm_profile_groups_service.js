(function () {

  'use strict';

  profileGroup
  .service('zmProfileGroupService',['$http','$q','zmProfileGroupRestService',zmProfileGroupService]);
  
  /** service for edit/update/delete */
  function zmProfileGroupService($http,$q,zmProfileGroupRestService){
    var Ctrl = this;
    var defferd = $q.defer();
    
    /** read group list */
    Ctrl.readListOfGroups = function readListOfGroups() {
      zmProfileGroupRestService.readListOfGroups().sucess(function (response) {
       defferd.resolve(response.data);
    }).error(function(failure) {
      return defferd.reject(failure); 
    });
   return defferd.promise;
    };

    /** read group detail */
    Ctrl.readGroupDetail = function readGroupDetail(id) {
       zmProfileGroupRestService.readGroupDetail().sucess(function (response) {
           defferd.resolve(response.data);
       }).error(function(failure) {
          return defferd.reject(failure); 
      });
       return defferd.promise;
    };

    /** add group */
    Ctrl.addGroup = function addGroup(data) {
      zmProfileGroupRestService.addGroup().sucess(function (response) {
       defferd.resolve(response.data);
    }).error(function(failure) {
      return defferd.reject(failure); 
    });
    return defferd.promise;
    };

    /** update group */
    Ctrl.updateGroup = function updateGroup(data) {
       zmProfileGroupRestService.updateGroup(data).sucess(function (response) {
           defferd.resolve(response.data);
       }).error(function(failure) {
          return defferd.reject(failure); 
      });
       return defferd.promise;
    };

    /** delete group */
    Ctrl.deleteGroup = function deleteGroup(id) {
      zmProfileGroupRestService.deleteGroup(id).sucess(function (response) {
       defferd.resolve(response.data);
    }).error(function(failure) {
      return defferd.reject(failure); 
    });
    return defferd.promise;
    };

    /** add user to group */
    Ctrl.addUserToGroup = function addUserToGroup(data) {
      zmProfileGroupRestService.addUserToGroup(id,data).sucess(function (response) {
       defferd.resolve(response.data);
    }).error(function(failure) {
      return defferd.reject(failure); 
    });
    return defferd.promise;
    };

    /** remove user from group */
    Ctrl.removeUserFromGroup = function removeUserFromGroup(id,data) {
      zmProfileGroupRestService.removeUserFromGroup(id,data).sucess(function (response) {
       defferd.resolve(response.data);
    }).error(function(failure) {
      return defferd.reject(failure); 
    });
    return defferd.promise;
    };
 };
})();