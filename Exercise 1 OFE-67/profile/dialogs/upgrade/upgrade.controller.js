/**
 * Created by zm3d on 04.03.16.
 */
(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('UpgradeDialogController', UpgradeDialogController);

  /** @ngInject */
  function UpgradeDialogController($mdDialog, $document, $log, $scope, tabIndex) {
    var vm = this;

    // Data
    $scope.selectedIndex = tabIndex;

    vm.selected = [];

    vm.PromotionCode = "";

    vm.abo = [
      {
        "title": "Basic",
        "price": "49",
        "price2": "49 €",
        "description": "For small teams",
        "functions": [
          {
            "title": "3 users",
            "users": "3"
          },
          {
            "title": "100 GB storage",
            "storage": "100 GB"
          }
        ],
        "duration": "1 month",
        "payementTime": "End of month",
        "class": "package-type2",
        "subclass": "price2 md-primary-bg",
        "selected": true,
        "checked": false,
        "basic": true
      },
      {
        "title": "Premium",
        "price": "495",
        "price2": "495 €",
        "description": "For larger teams",
        "functions": [
          {
            "title": "10 users",
            "users": "10"
          },
          {
            "title": "500 GB storage",
            "storage": "500 GB"
          }
        ],
        "duration": "12 months",
        "payementTime": "End of month",
        "class": "package-type3",
        "subclass": "price3 md-primary-bg",
        "selected": false,
        "checked": false,
        "premium": true
      },
      {
        "title": "Enterprise",
        "price": "995",
        "price2": "995 €",
        "description": "For big teams",
        "functions": [
          {
            "title": "25 users",
            "users": "10"
          },
          {
            "title": "1 TB storage",
            "storage": "1 TB"
          }
        ],
        "duration": "12 months",
        "payementTime": "End of month",
        "class": "package-type4",
        "subclass": "price4 md-primary-bg",
        "selected": false,
        "checked": false,
        "enterprise": true
      }

    ];


    vm.service = [

      {
        "servtitle": "Users",
        "servdescription": [


          {
            "offer": "+5 | 180€ / month",
            "offer2": "Users: +5 | 180€ / month",
            "checked": false,
            "Basic": true,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          },
          {
            "offer": "+10 | 350€ / month",
            "offer2": "Users: +10 | 350€ / month",
            "checked": false,
            "Basic": false,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          },
          {
            "offer": "+25 | 675 € / month",
            "offer2": "Users: +25 | 675 € / month",
            "checked": false,
            "Basic": false,
            "Premium": false,
            "Enterprise": true,
            "disabled": true
          }

        ]

      },
      {
        "servtitle": "Storage",
        "servdescription": [
          {
            "offer": "+100 GB | 25 € / month",
            "offer2": "Storage: +100 GB | 25 € / month",
            "checked": false,
            "Basic": true,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          },
          {
            "offer": "+500 GB | 115 € / month",
            "offer2": "Storage: +500 GB | 115 € / month",
            "checked": false,
            "Basic": false,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          },
          {
            "offer": "+1 TB | 215 € / month",
            "offer2": "Storage: +1 TB | 215 € / month",
            "checked": false,
            "Basic": false,
            "Premium": false,
            "Enterprise": true,
            "disabled": true
          }
        ]

      },
      {
        "servtitle": "Services",
        "servdescription": [
          {
            "offer": "Upload service for product data and media assets",
            "checked": false,
            "Basic": true,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          },
          {
            "offer": "Sector, business and user specific reports",
            "checked": false,
            "Basic": false,
            "Premium": true,
            "Enterprise": true,
            "disabled": true
          }

        ]

      }
    ];
    //////////

    // Methods
    vm.closeDialog = closeDialog;
    vm.openConfirmUpgradeDialog = openConfirmUpgradeDialog;
    vm.clickAbo = clickAbo;
    vm.disableServicesCheckbox = disableServicesCheckbox;
    vm.uncheckServicesCheckbox = uncheckServicesCheckbox;
    vm.updateButtonDisabled = updateButtonDisabled;
    //////////

    function closeDialog() {
      $mdDialog.hide();
    }

    function clickAbo(abo) {
      angular.forEach(vm.abo, function (abos) {
        if (abo.title !== abos.title) {
          abos.checked = false
        }

      });
    }

    /**
     * Disable/Enable checkboxes for certain plan
     *
     */

    function disableServicesCheckbox(clicked_abo) {
      angular.forEach(vm.abo, function (abo) {

        if (abo.checked == true || abo == clicked_abo) {
          $log.debug(abo);
          angular.forEach(vm.service, function (serv) {
            {
              angular.forEach(serv.servdescription, function (service) {
                if (abo.title == "Basic") {
                  if (service.Basic == true) {
                    service.disabled = false;
                  }
                }

                if (abo.title == "Premium") {
                  if (service.Premium == true) {
                    service.disabled = false;
                  }
                }

                if (abo.title == "Enterprise") {
                  if (service.Enterprise == true) {
                    service.disabled = false;
                  }
                }
              });
            }
          })
        }
      })

    }

    /**
     * Disable Button if nothing checked
     *
     */

    function updateButtonDisabled() {
      return (
        _.isEmpty(_.where(vm.abo, {checked: true})) &&
        _.isEmpty(_.where(_.flatten(_.map(vm.service, function (service) {
          return service.servdescription
        })), {checked: true}))
      );
    }


    /**
     * Uncheck all service checkboxes when return to
     * plan tab
     *
     */


    function uncheckServicesCheckbox() {
      angular.forEach(vm.service, function (serv) {
        angular.forEach(serv.servdescription, function (service) {
          if (service.checked == true) {
            service.checked = false;
          }
          if (service.disabled == false) {
            service.disabled = true;
          }
        })
      });
    }


    /**
     * Open confirm upgrade dialog
     *
     */
    function openConfirmUpgradeDialog() {
      angular.forEach(vm.abo, function (abo) {
        if (abo.checked == true) {
          vm.selected.push(abo);
        }

      });

      angular.forEach(vm.service, function (serv) {
        angular.forEach(serv.servdescription, function (service) {
          if (service.checked == true) {
            vm.selected.push(service);
          }

        })
      });

      closeDialog();
      $mdDialog.show({
        controller: 'UpgradeConfirmDialogController',
        controllerAs: 'vm',
        locals: {
          selectedMail: undefined
        },
        templateUrl: 'app/main/profile/dialogs/upgrade-confirm-dialog/upgrade-confirm-dialog.html',
        parent: angular.element($document.body),
        targetEvent: {PromotionCode: vm.PromotionCode, selected: vm.selected},
        clickOutsideToClose: true
      });
    }


  }
})();
/**
 * Created by zm3d on 04.03.16.
 */
