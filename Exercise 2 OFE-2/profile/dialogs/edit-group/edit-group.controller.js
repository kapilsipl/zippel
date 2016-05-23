(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('EditGroupDialogController', EditGroupDialogController);

  /** @ngInject */
  function EditGroupDialogController($mdDialog)
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
