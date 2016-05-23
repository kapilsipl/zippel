(function () {
  'use strict';
profileUser
  .service('zmUserService',['$http','$q','zmUserRestService', zmUserService]);
  
  /** services for add/update/delete */
  function zmUserService($http,$q,zmUserRestService){
    var Ctrl = this;
    var defferd = $q.defer();
    
    /** read list of user */
    Ctrl.readListOfUser = function readListOfUser() {
      zmUserRestService.readListOfUser()
      .sucess(function (response) {
       defferd.resolve(response.data);
     }).error(function(failure) {
      return defferd.reject(failure); 
    });
     return defferd.promise;
   };

   /** read user */
   Ctrl.readUser = function readUser(id) {
     zmUserRestService.readUser().sucess(function (response) {
       defferd.resolve(response.data);
     }).error(function(failure) {
      return defferd.reject(failure); 
    });
     return defferd.promise;
   };

   /** delete user */
   Ctrl.deleteUser = function deleteUser(id) {
    zmUserRestService.deleteUser(id).sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
 };

   /** add user */
   Ctrl.addUser = function addUser(data) {
    zmUserRestService.addUser().sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

  /** update user */
  Ctrl.updateUser = function updateUser(data) {
   zmUserRestService.updateUser(data).sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

  /** read user detail */
  Ctrl.readPersonalDetails = function readPersonalDetails(id) {
   zmUserRestService.readPersonalDetails().sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

  /** update user detail */
  Ctrl.updatePersonalDetails = function updatePersonalDetails(data) {
   zmUserRestService.updatePersonalDetails(data).sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

  /** read company detail */
  Ctrl.readCompanyDetails = function readCompanyDetails(id) {
   zmUserRestService.readCompanyDetails().sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

  /** update company detail */
  Ctrl.updateCompanyDetails = function updateCompanyDetails(data) {
   zmUserRestService.updateCompanyDetails(data).sucess(function (response) {
     defferd.resolve(response.data);
   }).error(function(failure) {
    return defferd.reject(failure); 
  });
   return defferd.promise;
  };

}
})();