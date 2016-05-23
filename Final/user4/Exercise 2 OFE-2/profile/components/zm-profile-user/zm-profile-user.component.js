/** Zm profile user */
(function () {

	'use strict';

	/** ZmProfileUserController is use to retrieve user list from services  */
	function ZmProfileUserController(zmUserService) {
		var vm = this;
    var vm.viewMode = true;
		var about = {};
    //Method
		vm.deleteUser = deleteUser;
		vm.addUser = addUser;
    
    this.$onInit = function() {
		zmUserService.readListOfUser(function(data){
			vm.contacts = data;
		});
   }

	/**
     * @name deleteUser
     * @param data
     * @description Delete user from list
     * @return {[data]}
     */
     function deleteUser(index,id){
      zmUserService.deleteUser(id,function(data){
        if(data.status==true){
          angular.forEach(contacts, function(value, key) {
            if(value['userid']==id){
              contacts.splice(i,1);
            }
          })
        }
      });
    }
    
    /**
     * @name addUser
     * @param addUserData // this is an object of user data
     * @description Add user in list
     * @return {[data]}
     */
     function addUser(addUserData){
      zmUserService.addUser(addUserData,function(data){
        vm.contacts = data;
      });
    }

    /**
     * @name readUser
     * @param data
     * @description read user detail
     * @return {[data]}
     */
     function readUser(id){
      viewMode = false;
      zmUserService.readUser(id,function(data){
        vm.about.contact = data ;
      });
    }

	}

	// zmProfileUser component is used show the user details.
	 appUser
		.controller('ZmProfileUserController',ZmProfileUserController)
		.component('zmProfileUser', {
			templateUrl: 'zm-profile-user.html',
			controller: ZmProfileUserController,
			bindings: {
			userid: '='
		}
	 });

	 /** @ngInject */
	 ZmProfileUserController.$inject = ['zmUserService'];
});