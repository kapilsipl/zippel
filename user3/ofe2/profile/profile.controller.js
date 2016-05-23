(function ()
{
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController($scope, About, Abo, Accounts, Contacts,Groups, $mdDialog, $document ,Occupation, PermissionsDB,PermissionsM,PermissionsS,PermissionsC,PermissionsF,PermissionsP, zmProfileDialogService, Lists, Widget)
    {
        var vm = this;
        var klick = false;
        vm.terminate = terminate;

        // Data
        vm.about = About.data;
        vm.abo = Abo.data;
        vm.accounts = Accounts.data;

      vm.editWork = false;
        vm.editLogin = false;
        vm.editContact = false;
        vm.occupation = {
          data: Occupation.data,
          selected: '',
          change : function (value)
          {
            vm.occupation.selected = value;
          },
          init        : function ()
          {
            // Run this function once to initialize widget

            /**
             * Update the range for the first time
             */
            vm.occupation.change('');
          }
        };
        vm.contacts = Contacts.data;
        vm.groups = Groups.data;
        vm.permissionsDB = PermissionsDB.data;
        vm.permissionsM = PermissionsM.data;
        vm.permissionsC = PermissionsC.data;
        vm.permissionsS = PermissionsS.data;
        vm.permissionsF = PermissionsF.data;
        vm.permissionsP = PermissionsP.data;
        vm.selected = false;
        vm.klick1 = false;
        vm.klick2 = false;
        vm.klick3 = false;
        vm.klick4 = false;
        vm.klick5 = false;
        vm.klick6 = false;
        vm.allowedTypesUser= ["user"];
        vm.allowedTypesGroup= ["group"];
        vm.lists = Lists.data;

        vm.widget4 = Widget.data.widget4;

        vm.widget1 = {
            options: {
              chart: {
                type                   : 'lineWithFocusChart',
                    color                  : ['#2196F3'],
                    height                 : 400,
                    margin                 : {
                  top   : 32,
                      right : 32,
                      bottom: 64,
                      left  : 48
                },
                isArea                 : true,
                    useInteractiveGuideline: true,
                    duration               : 1,
                    clipEdge               : true,
                    clipVoronoi            : false,
                    interpolate            : 'cardinal',
                    showLegend             : false,
                    x                      : function (d)
                {
                  return d.x;
                },
                y                      : function (d)
                {
                  return d.y;
                },
                xAxis                  : {
                  showMaxMin: false,
                      tickFormat: function (d)
                  {
                    var date = new Date(new Date().setDate(new Date().getDate() + d));
                    return d3.time.format('%b %d')(date);
                  }
                },
                yAxis                  : {
                  showMaxMin: false
                },
                x2Axis                 : {
                  showMaxMin: false,
                      tickFormat: function (d)
                  {
                    var date = new Date(new Date().setDate(new Date().getDate() + d));
                    return d3.time.format('%b %d')(date);
                  }
                },
                y2Axis                 : {
                  showMaxMin: false
                },
                interactiveLayer       : {
                  tooltip: {
                    gravity: 's',
                        classes: 'gravity-s'
                  }
                },
                legend                 : {
                  margin    : {
                    top   : 8,
                        right : 0,
                        bottom: 32,
                        left  : 0
                  },
                  rightAlign: false
                }
              }
            },
          data: Widget.data.widget1
        };



      vm.dtOptions = {
        dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        pagingType: 'simple',
        autoWidth : false,
        responsive: true
      };

      // Methods
      vm.editUserProfile = editUserProfile;
      vm.openDetailView= openDetailView;
      vm.AddUserDialog= AddUserDialog;
      vm.NewGroupDialog= NewGroupDialog;
      vm.EditGroupDialog= EditGroupDialog;
      vm.DeleteGroupDialog= DeleteGroupDialog;
      vm.DeleteUserDialog= DeleteUserDialog;
      vm.uploadProfilePictureDialog= uploadProfilePictureDialog;
      vm.collapse= collapse;
      vm.collapse1= collapse1;
      vm.collapse2= collapse2;
      vm.collapse3= collapse3;
      vm.collapse4= collapse4;
      vm.collapse5= collapse5;
      vm.collapse6= collapse6;
      vm.UpgradeDialog= UpgradeDialog;
      vm.AddAccountDialog = AddAccountDialog;
      //////////
      
      
      // Model to JSON for demo purpose
      $scope.$watch('lists', function(lists) {
        $scope.modelAsJson = angular.toJson(lists, true);
      }, true);

      /**
       * Open add account dialog
       *
       * @param ev
       */
      function AddAccountDialog(ev)
      {
        $mdDialog.show({
          controller         : 'AddAccountDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/share/dialogs/add-account/add-account.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }

      /**
       * Open add new contact dialog
       *
       * @param ev
       */
      function AddUserDialog(ev)
      {
        $mdDialog.show({
          controller         : 'AddUserDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/profile/dialogs/add-user/add-user.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }

      /**
       * Open new group dialog
       *
       * @param ev
       */
      function NewGroupDialog(ev)
      {
        $mdDialog.show({
          controller         : 'NewGroupDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/profile/dialogs/new-group/new-group.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }

      /**
       * Open edit group dialog
       *
       * @param ev
       */
      function EditGroupDialog(ev)
      {
        $mdDialog.show({
          controller         : 'EditGroupDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/profile/dialogs/edit-group/edit-group.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }


      /**
       * Open edit group dialog
       *
       * @param ev
       */
      function DeleteGroupDialog(ev)
      {
        $mdDialog.show({
          controller         : 'DeleteGroupDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/profile/dialogs/delete-group/delete-group.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }

      /**
     * Open edit group dialog
     *
     * @param ev
     */
    function DeleteUserDialog(ev)
    {
      $mdDialog.show({
        controller         : 'DeleteUserDialogController',
        controllerAs       : 'vm',
        locals             : {
          selectedMail: undefined
        },
        templateUrl        : 'app/main/profile/dialogs/delete-user/delete-user.html',
        parent             : angular.element($document.body),
        targetEvent        : ev,
        clickOutsideToClose: true
      });
    }

      /**
       * Open edit group dialog
       *
       * @param ev
       */
      function uploadProfilePictureDialog(ev)
      {
        $mdDialog.show({
          controller         : 'UploadProfilePictureDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined
          },
          templateUrl        : 'app/main/profile/dialogs/upload-profile-picture/upload-profile-picture.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });
      }

      /**
       * Open upgrade dialog
       *
       * @param ev
       */
      function UpgradeDialog(ev, tabIndex)
      {
        $mdDialog.show({
          controller         : 'UpgradeDialogController',
          controllerAs       : 'vm',
          locals             : {
            selectedMail: undefined,
            tabIndex: tabIndex == undefined ? 0 : tabIndex
          },
          templateUrl        : 'app/main/profile/dialogs/upgrade/upgrade.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true
        });


      }

      /**
       * Open Detail View of an List entry
       */
      function openDetailView(entry)
      {
        vm.selected = entry;
      }

      /**
       * Toggle folded status
       */
      function editUserProfile(event)
      {
        if(klick == false)
        {
          var id = event.target.id;

          if(id == "edit-work")
          {
            vm.editWork = true;

          }

          if(id == "edit-general-information")
          {
            vm.editLogin = true;

          }

          if(id == "edit-contact")
          {
            vm.editContact = true;

          }

          klick = true;
        } else {
          var id = event.target.id;

          if(id == "edit-work")
          {
            vm.editWork = false;

          }

          if(id == "edit-general-information")
          {
            vm.editLogin = false;

          }

          if(id == "edit-contact")
          {
            vm.editContact = false;

          }

          klick = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse(object)
      {

        console.log(object);

        if (object.clicked == false) {
          $("#"+object.groupname+"-"+object.groupid).css("display", "none");
          object.clicked  = true;
        } else {
          $("#"+object.groupname+"-"+object.groupid).css("display", "table");
          object.clicked  = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse1(object)
      {

        console.log("test");

        if (vm.klick1 == false) {
          $("#dashboard-table-dashboard").css("display", "table");
          vm.klick1 = true;
        } else {
          $("#dashboard-table-dashboard").css("display", "none");
          vm.klick1 = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse2(object)
      {

        if (vm.klick2 == false) {
          $("#create-table-dashboard").css("display", "table");
          vm.klick2 = true;
        } else {
          $("#create-table-dashboard").css("display", "none");
          vm.klick2 = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse3(object) {

        if (vm.klick3 == false) {
          $("#manage-table-dashboard").css("display", "table");
          vm.klick3 = true;
        } else {
          $("#manage-table-dashboard").css("display", "none");
          vm.klick3 = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse4(object)
      {

        if(vm.klick4 == false)
        {
          $("#share-table-dashboard").css("display","table");
          vm.klick4 = true;
        } else {
          $("#share-table-dashboard").css("display","none");
          vm.klick4 = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse5(object)
      {

        if(vm.klick5 == false)
        {
          $("#file-manager-table-dashboard").css("display","table");
          vm.klick5 = true;
        } else {
          $("#file-manager-table-dashboard").css("display","none");
          vm.klick5 = false;
        }
      }

      /**
       * Toggle view
       */
      function collapse6(object)
      {

        if(vm.klick6 == false)
        {
          $("#profile-table-dashboard").css("display","table");
          vm.klick6 = true;
        } else {
          $("#profile-table-dashboard").css("display","none");
          vm.klick6 = false;
        }
      }

      function terminate(){
        //*** TODO :: we should define the frontend business logic for terminating a contract
        zmProfileDialogService.showTerminationDialog();
      }

    }

})();
