import ISCEService = angular.ISCEService;
/**
 * Created by gerd on 25.02.16.
 */
(function () {
  'use strict';

  interface IAssetlist {
    type: number;
    columns: number;
    onEditAsset: (o: {asset: zm.common.IAsset}) => void;
    assets: zm.common.IAsset[];
  }

  /**
   *
   */
  class Assetlist implements IAssetlist {
    private _type$; // Observable
    type: number;
    private _column$; // Observable
    columns: number = 3;
    onEditAsset: (o: {asset: zm.common.IAsset}) => void;
    private _asset$; // Observable
    private _assets: zm.common.IAsset[] = [];

    /**
     *
     * @param zmAssetbarService
     * @param $sce
     * @param imagesLoaded
     * @param $timeout
     * @param $log
     */
    constructor(private zmAssetbarService, private $sce: ISCEService, private imagesLoaded, private $timeout: angular.ITimeoutService, private $log: ILogService) {

    }

    /**
     *
     */
    $onInit() {
      /**
       * TODO: handle unsubscription
       */
      this._type$ = this.zmAssetbarService.onChangeAssetType();
      this._type$.subscribe((type) => {
        this.type = type;
        this._assets.splice(0);
      });
      /**
       * TODO: handle unsubscription
       */
      this._asset$ = this.zmAssetbarService.onChangeAssets();
      this._asset$.subscribe((asset$) => {
        let assetlist: zm.common.IAsset[] = [];
        asset$
          .subscribe(
            (asset: zm.common.IAsset) => assetlist.push(asset),
            (error: Error) => this.$log.error(error),
            () => {
              this.$timeout(() => {
                this._assets = this.getMasonryAssets(assetlist, this.columns);
                // this.$log.debug('done', this._assets.length);
                this.imagesLoaded('.zm-create-assetlist', () => {
                  // TODO display after all images have been loaded
                });
              });
            }
          );
      });

      /**
       * TODO: handle unsubscription
       */
      this._column$ = this.zmAssetbarService.onChangeColumns();
      // TODO what needs to be done after number of columns has been changed?
      this._column$.subscribe((columns: number) => this.columns = columns);
    }

    /**
     *
     * @return {zm.common.IAsset[]}
     */
    get assets(): zm.common.IAsset[] {
      return this._assets;
    }

    /**
     *
     * @param svg
     * @returns {any}
     */
    getTrustedSvg(svg) {
      // this.$log.debug(svg, this.$sce.trustAsHtml(svg));
      // https://github.com/angular/angular.js/commit/46b80654cae9105642909cd55f73f7c26d2fbd80

      return this.$sce.trustAsHtml(svg);
    }

    /**
     *
     * @param asset
     * @param ev
     */
    editAsset(asset: zm.common.IAsset, ev?: Event): void {
      this.onEditAsset({
        asset
      });
    }

    /**
     *
     * @param list
     * @param columns
     */
    private getMasonryAssets(list: zm.common.IAsset[], columns?: number = 3): zm.common.IAsset[] {
      const rows: number = Math.floor(list.length / columns);
      const ret: zm.common.IAsset[] = [];
      /**
       * e.g for 30 assets
       * index => position = row + offset
       * 0 => 0 = 0 / 3 = 0 + 0
       * 1 => 10 = 1 / 3 = 0 + 10
       * 2 => 20 = 2 / 3 = 0 + 20
       * 3 => 1 = 3 / 3 = 1 + 0
       * 4 => 11 = 4 / 3 = 1 + 10
       * 5 => 21 = 5 / 3 = 1 + 20
       * 6 => 2 = 6 / 3 = 2 + 0
       * 7 => 12 = 7 / 3 = 2 + 10
       * 8 => 22 = 8 / 3 = 2 + 20
       */
      list.forEach((asset: zm.common.IAsset, index: number) => {
        const row: number = Math.floor(index / columns);
        const offset: number = (index % columns) * rows;
        const position: number = row + offset;
        // this.$log.debug('getMasonryAssets', index, position, asset.name);
        ret[position] = asset;
      });
      return ret;
    }

  }

  angular.module('create.assetbar.components.assetlist', [])
    .controller('zmAssetlistController', Assetlist)
    .config(function ($sceProvider, $sanitizeProvider) {
      // TODO Completely disable SCE.  For demonstration purposes only!
      // TODO Do not use in new projects.
      $sanitizeProvider.enableSvg;
      $sceProvider.enabled(true);
    })
    .component('zmCreateAssetlist', {
      templateUrl: 'app/main/create/assetbar/components/assetlist/assetlist.html',
      controller: 'zmAssetlistController as vm',
      bindings: {
        onEditAsset: '&'
      }
    });

})();
