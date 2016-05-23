/**
 * Created by gerd on 25.02.16.
 */
(function () {
  'use strict';

  /**
   *
   */
  class Assetbar {
    type: number;
    columns: number;

    id: string = 'assetbar';

    /**
     *
     * @param $mdSidenav
     * @param zmAssetType
     * @param $state
     * @param zmCreatorService
     * @param $log
     */
    constructor(private $mdSidenav: ISidenavService, private zmAssetType, private $state: angular.ui.IStateService, private zmCreatorService, private $log: ILogService) {

    }

    /**
     *
     */
    $onInit() {
      this.type = 0;
      this.columns = 2;
    }

    /**
     *
     * @return {*[]}
     */
    get types() {
      return [this.zmAssetType.Image, this.zmAssetType.BackgroundImage, this.zmAssetType.Shape, this.zmAssetType.Logo];
    }

    /**
     *
     */
    openAssetbar(): void {
      this.$mdSidenav(this.id).open();
    }

    /**
     *
     */
    closeAssetbar(): void {
      this.$mdSidenav(this.id).close()
        .then(() => this.clearState());
    }

    /**
     *
     * @returns {boolean}
     */
    isOpen(): boolean {
      return this.$mdSidenav(this.id).isOpen();
    }

    /**
     *
     */
    clearState(): void {
      try {
        this.$state.go('^');
      } catch (error) {
        this.$log.warn('cannot change state', error);
      }
    }

    /**
     *
     * @param asset
     */
    editAsset(asset: IAsset): void {
      this.zmCreatorService.editAsset(asset);
    }

  }

  angular.module('create.assetbar.components.assetbar', [])
    .controller('zmAssetbarController', Assetbar)
    .component('zmCreateAssetbar', {
      templateUrl: 'app/main/create/assetbar/components/assetbar/assetbar.html',
      controller: 'zmAssetbarController as vm'
    });
})();
