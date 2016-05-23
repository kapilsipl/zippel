(function ()
{
  'use strict';

  angular
    .module('app.share')
    .controller('AddUserDialogController', AddUserDialogController);

  /** @ngInject */
  function AddUserDialogController($mdDialog)
  {
    var vm = this;

    vm.accounts =
    {
      "current": "Account",
      "data": [
        {
          "name":"Facebook",
          "icon":"icon-facebook"
        },
        {
          "name":"Twitter",
          "icon":"icon-twitter"
        },
        {
          "name":"Google+",
          "icon":"icon-google-plus"
        }
      ],
      change : function (channel)
      {
        vm.accounts.current = channel;
      }
    };
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
