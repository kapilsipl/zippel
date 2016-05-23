(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('UploadProfilePictureDialogController', UploadProfilePictureDialogController);

  /** @ngInject */
  function UploadProfilePictureDialogController($mdDialog)
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
