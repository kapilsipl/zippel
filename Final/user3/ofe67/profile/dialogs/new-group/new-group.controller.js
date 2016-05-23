(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('NewGroupDialogController', NewGroupDialogController);

  /** @ngInject */
  function NewGroupDialogController($mdDialog)
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
