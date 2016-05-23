(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('AddUserDialogController', AddUserDialogController);

  /** @ngInject */
  function AddUserDialogController($mdDialog)
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
