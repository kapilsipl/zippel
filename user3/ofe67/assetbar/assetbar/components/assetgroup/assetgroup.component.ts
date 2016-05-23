/**
 * Created by gerd on 29.02.16.
 */
(function () {
  'use strict';

  /**
   *
   */
  class AssetgroupController {
    group: string;
    private _colors: string[];

    private headlines: zm.common.IAsset[];

    /**
     *
     * @param zmAssetService
     * @param zmAssetbarService
     * @param zmAssetType
     * @param tinycolor
     * @param $log
     * @param zmStageVarServiceTS
     * @param zmTilegeneratorVarService
     * @param $mdSidenav
     * @param $timeout
     * @param zmColorService
     * @param zmCreatorService
     */
    constructor(private zmAssetService, private zmAssetbarService, private zmAssetType, private tinycolor: tinycolor, private $log: ILogService, private zmStageVarServiceTS, private zmTilegeneratorVarService, private $mdSidenav: ISidenavService, private $timeout: angular.ITimeoutService, private zmColorService, private zmCreatorService) {
      this.init();
    }

    /**
     *
     */
    $onInit() {
      this.zmAssetService.readAssets(this.zmAssetType['Textfield'])
        .then((result) => {
          this.headlines = result;
        });

      this.zmAssetbarService.setAssetType(this.zmAssetService.getAssetType(this.group));
      this.$timeout(() => {
        this.openAssetbar();
      });
    }

    /**
     *
     */
    $onDestroy() {
      this.$log.debug(`Look I am destroyed `, this);
    }

    /**
     *
     * @return {string[]}
     */
    get colors(): string[] {
      return angular.copy(this._colors);
    }

    /**
     *
     */
    openAssetbar() {
      this.$mdSidenav('assetbar').open();
    }

    /**
     *
     */
    createTile() {
      this.zmCreatorService.createTile();
    }

    /**
     * setzt eine Hintergrundfarbe im angezeigten Blatt
     *
     * @param color
     */
    selectColor(color: string): void {
      this.$log.info('Color : ' + color);
      // TODO move to separate method inside of service
      let pr = this.zmStageVarServiceTS.Projects[this.zmStageVarServiceTS.activeProject];
      let page_setup_scr = undefined;

      if (pr !== undefined) {
        if (pr.Page[this.zmStageVarServiceTS.activeProjectPage] !== undefined) {
          page_setup_scr = pr.Page[this.zmStageVarServiceTS.activeProjectPage].konfig.page_setup_scr;      //   $scope.page_setup_array[$scope.page_idx - 1].scr;
          page_setup_scr['background'] = color;
        }
      }

      // Herausfinden welcher Berreich aktiv ist
      if (this.zmTilegeneratorVarService.tileScreenKonfig !== undefined) {
        page_setup_scr = this.zmTilegeneratorVarService.tileScreenKonfig.page_setup_scr;
        page_setup_scr['background'] = color;
      }
    }

    /**
     *
     */
    showColorPicker() {
      this.zmColorService.showColorPicker()
        .then((color: string) => {
          this.selectColor(color);
        });
    }

    /**
     *
     */
    private init() {
      this._colors = new Array(9).fill('').map(() => this.tinycolor.random().toHexString());
    }
  }

  angular.module('create.assetbar.components.assetgroup', [])
    .controller('zmAssetgroupController', AssetgroupController)
    .component('zmCreateAssetgroup', {
      templateUrl: 'app/main/create/assetbar/components/assetgroup/assetgroup.html',
      controller: 'zmAssetgroupController as vm',
      bindings: {
        group: '='
      }
    });
})();
