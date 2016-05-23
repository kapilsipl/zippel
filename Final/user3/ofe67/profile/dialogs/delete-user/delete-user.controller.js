(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('DeleteUserDialogController', DeleteUserDialogController);

  /** @ngInject */
  function DeleteUserDialogController($mdDialog)
  {
    var vm = this;

    // Data

    //////////

    // Methods
    vm.closeDialog = closeDialog;

    //////////

    function closeDialog()
    {
      $mdDialog.hide();
    }
  }
})();
