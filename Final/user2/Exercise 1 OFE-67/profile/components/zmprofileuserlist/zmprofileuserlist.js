/** ZM profile group user list */
(function () {

  'use strict';

  /** ZmProfileGroupUserListCtrl is used to show user list */
  function ZmProfileGroupUserListCtrl(zmProfileGroupService) { 
    var vm = this;
    vm.lists = vm.users;
  }

  /** zmProfileGroupList component is use to show the group user list on page */
  angular.module('app.group')
  .controller('ZmProfileGroupUserListCtrl',ZmProfileGroupUserListCtrl)
  .component('zmProfileUserList', {
    templateUrl: 'zm-profile-user-list.html',
    controller: ZmProfileGroupUserListCtrl,
    bindings: {
      users: '='
    }
  });
  
  /** @ngInject */
  ZmProfileGroupUserListCtrl.$inject = ['zmProfileGroupService'];
});