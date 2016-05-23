(function ()
{
  'use strict';

  angular
    .module('app.profile')
    .controller('UploadBackgroundPictureDialogController', UploadBackgroundPictureDialogController);

  /** @ngInject */
  function UploadBackgroundPictureDialogController($mdDialog)
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
