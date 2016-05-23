import IFilterOrderBy = angular.IFilterOrderBy;
import IFilterFilter = angular.IFilterFilter;
/**
 * Created by gerd on 05.04.16.
 */
(function () {
  'use strict';

  /**
   *
   */
  class AssetbarService {
    // @link {https://github.com/asyncly/EventEmitter2}
    private _emitter;

    private _filters: {name: string, value: string}[] = [
      {
        name: 'My Data',
        value: 'my'
      }, {
        name: 'External Data',
        value: 'external'
      }, {
        name: 'Already Used',
        value: 'used'
      }
    ];

    private _predicates: {name: string, value: string}[] = [
      {
        name: 'Name',
        value: 'name'
      }, {
        name: 'Date',
        value: 'createdDate'
      }, {
        name: 'Price',
        value: 'price.value'
      }];

    private _type: number = 0;
    private _filter: string[] = [];
    private _predicate: string = 'name';
    private _reverse: boolean = false;

    /**
     *
     * @param zmAssetService
     * @param Rx
     * @param EventEmitter2
     * @param filterFilter
     * @param orderByFilter
     * @param $log
     */
    constructor(private zmAssetService, private Rx, private EventEmitter2, private filterFilter: IFilterFilter, private orderByFilter: IFilterOrderBy, private $log: ILogService) {
      this._emitter = new this.EventEmitter2();
    }

    /**
     *
     * @returns {{name: string, value: string}[]}
     */
    getFilters(): {name: string, value: string}[] {
      return this._filters;
    }

    /**
     *
     * @returns {{name: string, value: string}[]}
     */
    getPredicates(): {name: string, value: string}[] {
      return this._predicates;
    }

    /**
     *
     */
    onChangeAssetType() {
      return this.Rx.Observable.fromEvent(this._emitter, 'assettype.change');
    }

    /**
     *
     * @param type
     */
    setAssetType(type: number): void {
      this._type = type;
      this._emitter.emit('assettype.change', type);
      this.reloadAssets(type, this._predicate, this._reverse, this._filter);
    }

    /**
     *
     * @param filter
     */
    setFilter(filter: string[]): void {
      this._filter = filter;
      this.reloadAssets(this._type, this._predicate, this._reverse, filter);
    }

    /**
     *
     * @param predicate
     */
    setPredicate(predicate: string): void {
      this._predicate = predicate;
      this.reloadAssets(this._type, predicate, this._reverse, this._filter);
    }

    /**
     *
     * @param reverse
     */
    setReverse(reverse: boolean): void {
      this._reverse = reverse;
      this.reloadAssets(this._type, this._predicate, reverse, this._filter);
    }

    /**
     *
     */
    onChangeColumns() {
      return this.Rx.Observable.fromEvent(this._emitter, 'columns.change');
    }

    /**
     *
     * @param columns
     */
    setColumns(columns: number): void {
      this._emitter.emit('columns.change', columns);
    }

    /**
     *
     * @returns {any}
     */
    onChangeAssets() {
      return this.Rx.Observable.fromEvent(this._emitter, 'assets.change');
    }

    /**
     *
     * @param type
     * @param predicate
     * @param reverse
     * @param filter
     */
    private reloadAssets(type: number, predicate: string = 'name', reverse: boolean = false, filter: string[] = []) {
      this.zmAssetService.readAssets(type)
        .then((assets: zm.common.IAsset[]) => this.filterFilter(assets, (asset: zm.common.IAsset) => {
          if (filter.length === 0) {
            return true;
          } else {
            return filter.every((value: string) => asset.predicate[value] === true);
          }
        }))
        .then((assets: zm.common.IAsset[]) => this.orderByFilter(assets, predicate, reverse))
        .then((assets: zm.common.IAsset[]) => this._emitter.emit(
          'assets.change',
          this.Rx.Observable.from(assets).take(48))
        ); // TODO handle endless scrolling, offset and limit
    }

  }

  angular.module('create.assetbar.services.assetbar', [])
    .service('zmAssetbarService', AssetbarService);

})();
