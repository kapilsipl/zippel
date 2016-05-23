/** Zm profile user */
(function () {

	'use strict';
  // appUser is a sub module of application
  // zmProfileUser component is used show the user details.
   appUser
    .controller('ZmProfileUserCtrl',ZmProfileUserCtrl)
    .component('zmProfileUser', {
      templateUrl: 'zm-profile-user.html',
      controller: ZmProfileUserCtrl,
      bindings: {
      userid: '='
    }
   });

   /** Injecting zmUserService in ZmProfileUserCtrl Controller for calling function */
   ZmProfileUserCtrl.$inject = ['zmUserService'];

	/** ZmProfileUserCtrl is use to retrieve user list from services  */
	function ZmProfileUserCtrl(zmUserService) {
		var vm = this;
    var vm.viewMode = true;
		var about = {};
    //Method
		vm.deleteUser = deleteUser;
		vm.addUser = addUser;

		zmUserService.readListOfUser(function(data){
			vm.contacts = data;
		});

	/**
     * @name deleteUser
     * @param index,id
     * @description Delete user from list
     * @return success or failure of deleted user
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
     * @return new added user data
     */
     function addUser(addUserData){
      zmUserService.addUser(addUserData,function(data){
        vm.contacts = data;
      });
    }

    /**
     * @name readUser
     * @param id
     * @description read user detail
     * @return user details
     */
     function readUser(id){
      viewMode = false;
      zmUserService.readUser(id,function(data){
        vm.about.contact = data ;
      });
    }

	}

});