/*profile user component code start*/
(function () {
'use strict';
profileUser
    .controller('ZmProfileUserController',['zmUserService',ZmProfileUserController])
    .component('zmProfileUser', {
      controller: ZmProfileUserController,
      templateUrl: 'zm_profile_user.html',
      bindings: {
      userid: '='
    }
   });

	/** profile controller function start  */
	function ZmProfileUserController(zmUserService) {
		var Ctrl = this;
        Ctrl.viewMode = true;
		Ctrl.about = {};
		Ctrl.deleteUser = deleteUser;
		Ctrl.addUser = addUser;

		zmUserService.readListOfUser(function(data){
			Ctrl.contacts = data;
		});

	/** delete user */
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
    
    /** add user */
     function addUser(addUserData){
      zmUserService.addUser(addUserData,function(data){
        Ctrl.contacts = data;
      });
    }

    /** edit user */
     function readUser(id){
      viewMode = false;
      zmUserService.readUser(id,function(data){
        Ctrl.about.contact = data ;
      });
    }

	}
});