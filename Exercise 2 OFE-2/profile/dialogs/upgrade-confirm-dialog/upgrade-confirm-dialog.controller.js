(function ()
{
    'use strict';

    angular
        .module('app.profile')
        .controller('UpgradeConfirmDialogController', UpgradeConfirmDialogController);


    /** @ngInject */
    function UpgradeConfirmDialogController($mdDialog, targetEvent, $log)
    {
        var vm = this;

        // Data
        vm.selected = targetEvent.selected;
        vm.PromotionCode = targetEvent.PromotionCode;

        vm.SelectedPromotion = 0;
        vm.isRandomPromotion = false;
        vm.currentPromotion = null;
        vm.isSinglePromotion = true;
        vm.isPromotionError = false;
        vm.PromoExamples = [
            {id: '1', promotions: [{name: 'SINGLEPROMO', caption: 'Eine Single Promotion, 10 extra Assets, etc'}]},
            {
                id: '2',
                isRandom: false,
                promotions: [
                    {name: 'MULLTIPROMO1', caption: 'Eine Multi Promotion, 5 extra Assets, etc'},
                    {name: 'MULLTIPROMO2', caption: 'Eine Multi Promotion, 1 extra Assets, etc'}
                ]
            },
            {
                id: '3',
                isRandom: true,
                promotions: [
                    {name: 'RANDOMPROMO1', caption: 'Eine zufällige Promotion, 1 extra Asset, etc'},
                    {name: 'RANDOMPROMO2', caption: 'Eine zufällige Promotion, 2 extra Assets, etc'},
                    {name: 'RANDOMPROMO3', caption: 'Eine zufällige Promotion, 3 extra Assets, etc'},
                    {name: 'RANDOMPROMO4', caption: 'Eine zufällige Promotion, 4 extra Assets, etc'},
                    {name: 'RANDOMPROMO5', caption: 'Eine zufällige Promotion, 5 extra Assets, etc'},
                    {name: 'RANDOMPROMO6', caption: 'Eine zufällige Promotion, 6 extra Assets, etc'},
                    {name: 'RANDOMPROMO7', caption: 'Eine zufällige Promotion, 7 extra Assets, etc'},
                    {name: 'RANDOMPROMO8', caption: 'Eine zufällige Promotion, 8 extra Assets, etc'},
                    {name: 'RANDOMPROMO9', caption: 'Eine zufällige Promotion, 9 extra Assets, etc'},
                    {name: 'RANDOMPROMOA', caption: 'Eine zufällige Promotion, 10 extra Assets, etc'},
                ]
            }
        ];

        onOpen();

        /**
         * method is running each time the dialog is opening
         * and it decides if selected
         */
        function onOpen(){
            vm.currentPromotion = "opened";
            var sel = false;
            angular.forEach(vm.PromoExamples, function(item){
                if(item.id == vm.PromotionCode){
                    vm.currentPromotion = item.promotions;
                    vm.isRandomPromotion=item.isRandom;
                    sel = true;
                }
            });
            if(sel==true){
                vm.isPromotionError=false;
            } else {
                vm.isPromotionError=true;
            }
            if(vm.currentPromotion.length>1){
                if(vm.isRandomPromotion){
                    // select a random element..
                    vm.isSinglePromotion=true;
                    var i = Math.floor(Math.random() * vm.currentPromotion.length);
                    vm.currentPromotion = vm.currentPromotion[i];
                }
                else{
                    vm.isSinglePromotion=false;
                }
            } else {
                vm.currentPromotion = vm.currentPromotion[0];
                vm.isSinglePromotion=true;
            }
        }



        //////////

        // Methods
        vm.closeDialog = closeDialog;
      vm.filterFunc = filterFunc;

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }

      function filterFunc(abo) {
        if(abo.title) {
          return true;
        }
        return false;
      }

    }
})();
