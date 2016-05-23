/** profile user details*/
(function () {
'use strict';

profileUser
.controller('ZmProfileUserController',['zmUserService', ZmProfileUserController])
.component('zmProfileUserDetail', {
    controller: ZmProfileUserController,
    templateUrl: 'zm_profile_user_detail.html',
    bindings: {
        userid: '='
    }
});
    /** ZmProfileUserController is used to add, update, delete user details */
    function ZmProfileUserController(zmUserService) {
        var Ctrl = this;
        /** read personal details */
        Ctrl.readPersonalDetails   = function readPersonalDetails(id){
          zmUserService.readPersonalDetails(id,function(data){
            Ctrl.about.contact[index] = data;
        });
      }

      /** read update details */
      Ctrl.updatePersonalDetails   = function updatePersonalDetails (index,updatePersonalDetails){
          zmUserService.updatePersonalDetails(updatePersonalDetails,function(data){
            Ctrl.about.contact[index] = data;
        });
      }

      /** read company details */
      Ctrl.readCompanyDetails   = function readCompanyDetails(id){
          zmUserService.readCompanyDetails(id,function(data){
            Ctrl.about.contact[index] = data;
        });
      }

      /** update company details */
      Ctrl.updateCompanyDetails   = function updateCompanyDetails (index,updateCompanyDetails){
          zmUserService.updatePersonalDetails(updateCompanyDetails,function(data){
            Ctrl.contacts[index] = data;
        });
      }
  }
});