(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('DeleteGroupDialogController', DeleteGroupDialogController);

  /** @ngInject */
  function DeleteGroupDialogController($mdDialog)
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
