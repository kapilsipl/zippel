/** profile group user list */
(function () {
  'use strict';
profileGroup
  .controller('ZmProfileGroupUserListController',['zmProfileGroupService',ZmProfileGroupUserListController])
  .component('zmProfileUserList', {
    controller: ZmProfileGroupUserListController,
    templateUrl: 'zm_profile_user_list.html',
    bindings: {
      users: '='
  }
});
  /** ZmProfileGroupUserListController is used to show user list */
  function ZmProfileGroupUserListController(zmProfileGroupService) { 
    var Ctrl = this;
    Ctrl.lists = Ctrl.users;
    }
});