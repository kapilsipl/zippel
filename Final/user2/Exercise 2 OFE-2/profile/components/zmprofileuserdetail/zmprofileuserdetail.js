/** ZM profile user details */
(function () {

	'use strict';
	
  /** ZmProfileUserCtrl is used to add, update, delete user details */
  function ZmProfileUserCtrl(zmUserService) {
    var vm = this;
    /** Methods */
    vm.readPersonalDetails   = readPersonalDetails;
    vm.updatePersonalDetails = updatePersonalDetails;
    vm.readCompanyDetails    = readCompanyDetails;
    vm.updateCompanyDetails  = updateCompanyDetails;

    /**
     * @name readPersonalDetails
     * @param id // user id
     * @description Read user personal details
     * @return user personal details data
     */
     function readPersonalDetails(id){
      zmUserService.readPersonalDetails(id,function(data){
        vm.about.contact[index] = data;
      });
    }

     /**
     * @name updatePersonalDetails
     * @param index,updatePersonalDetailsData
     * @description Update user personal details
     * @return updated user data
     */
     function updatePersonalDetails (index,updatePersonalDetailsData){
      zmUserService.updatePersonalDetails(updatePersonalDetailsData,function(data){
        vm.about.contact[index] = data;
      });
    }

     /**
     * @name readCompanyDetails
     * @param id
     * @description read user company details
     * @return user company details data
     */
     function readCompanyDetails(id){
      zmUserService.readCompanyDetails(id,function(data){
        vm.about.contact[index] = data;
      });
    }

    /**
     * @name updateCompanyDetails
     * @param index,updateCompanyDetailsData
     * @description Update user company detail
     * @return updated company details data
     */
     function updateCompanyDetails (index,updateCompanyDetailsData){
      zmUserService.updatePersonalDetails(updateCompanyDetailsData,function(data){
        vm.contacts[index] = data;
      });
    }

  }

/**
 * zmProfileUserDetail component is used to show details of user
 */
 angular.module('app.user')
 .controller('ZmProfileUserCtrl',ZmProfileUserCtrl)
 .component('zmProfileUserDetail', {
 	templateUrl: 'zm-profile-user-detail.html',
 	controller: ZmProfileUserCtrl,
 	bindings: {
 		userid: '='
 	}
 });

 /** @ngInject */
 ZmProfileUserCtrl.$inject = ['zmUserService'];
});