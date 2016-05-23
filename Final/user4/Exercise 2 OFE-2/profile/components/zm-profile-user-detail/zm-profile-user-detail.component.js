/** ZM profile user details */
(function () {

	'use strict';
	
  /** ZmProfileUserController is used to add, update, delete user details */
  function ZmProfileUserController(zmUserService) {
    var vm = this;
    /** Methods */
    vm.readPersonalDetails   = readPersonalDetails;
    vm.updatePersonalDetails = updatePersonalDetails;
    vm.readCompanyDetails    = readCompanyDetails;
    vm.updateCompanyDetails  = updateCompanyDetails;

    /**
     * @name readPersonalDetails
     * @param id
     * @description Read user personal details
     * @return {[data]}
     */
     function readPersonalDetails(id){
      zmUserService.readPersonalDetails(id,function(data){
        vm.about.contact[index] = data;
      });
    }

     /**
     * @name updatePersonalDetails
     * @param data
     * @description Update user personal details
     * @return {[data]}
     */
     function updatePersonalDetails (index,updatePersonalDetails){
      zmUserService.updatePersonalDetails(updatePersonalDetails,function(data){
        vm.about.contact[index] = data;
      });
    }

     /**
     * @name readCompanyDetails
     * @param id
     * @description read user company details
     * @return {[data]}
     */
     function readCompanyDetails(id){
      zmUserService.readCompanyDetails(id,function(data){
        vm.about.contact[index] = data;
      });
    }

    /**
     * @name updateCompanyDetails
     * @param data
     * @description Update user company detail
     * @return {[data]}
     */
     function updateCompanyDetails (index,updateCompanyDetails){
      zmUserService.updatePersonalDetails(updateCompanyDetails,function(data){
        vm.contacts[index] = data;
      });
    }

  }

/**
 * zmProfileUserDetail component is used to show details of user
 */
 appUser
 .controller('ZmProfileUserController',ZmProfileUserController)
 .component('zmProfileUserDetail', {
 	templateUrl: 'zm-profile-user-detail.html',
 	controller: ZmProfileUserController,
 	bindings: {
 		userid: '='
 	}
 });

 /** @ngInject */
 ZmProfileUserController.$inject = ['zmUserService'];
});