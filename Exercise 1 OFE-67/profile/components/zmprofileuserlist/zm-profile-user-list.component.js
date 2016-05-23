/** ZM profile group user list */
(function () {

  'use strict';

  /** ZmProfileGroupUserListController is used to show user list */
  function ZmProfileGroupUserListController(zmProfileGroupService) { 
    var vm = this;
    vm.lists = vm.users;
  }

  /** zmProfileGroupList component is use to show the group user list on page */
  angular.module('app.group')
  .controller('ZmProfileGroupUserListController',ZmProfileGroupUserListController)
  .component('zmProfileUserList', {
    templateUrl: 'zm-profile-user-list.html',
    controller: ZmProfileGroupUserListController,
    bindings: {
      users: '='
    }
  });
  
  /** @ngInject */
  ZmProfileGroupUserListController.$inject = ['zmProfileGroupService'];
});