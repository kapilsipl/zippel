import ISCEProvider = angular.ISCEProvider;
import ILogService = angular.ILogService;
/**
 * Created by gerd on 29.02.16.
 */
(function () {
  'use strict';

  /**
   *
   */
  class Assettoolbar {
    private _items: {icon: string; label: string; disabled?: boolean}[];
    selected: number;
    predicate: string = 'name';
    reverse: boolean = false;
    columns: number = 3;

    /**
     *
     */
    constructor(private zmAssetbarService) {
    }

    /**
     *
     */
    $onInit(): void {
      this.init();
    }

    /**
     *
     * @returns {Object[]}
     */
    get items(): {icon: string; label: string; disabled?: boolean}[] {
      return this._items;
    }

    /**
     *
     * @param index
     */
    selectItem(index: number): void {
      if (this.selected === index) {
        this.selected = void 0;
      } else {
        this.selected = index;
      }
    }

    /**
     *
     * @return {boolean}
     */
    get open() {
      return angular.isDefined(this.selected);
    }

    /**
     *
     * @returns {{name: string, value: string}[]}
     */
    get filters(): {name: string, value: string}[] {
      return this.zmAssetbarService.getFilters();
    }

    /**
     *
     * @param filter
     */
    setFilter(filter: string[]): void {
      this.zmAssetbarService.setFilter(filter);
    }

    /**
     *
     * @returns {string[]}
     */
    get predicates(): {name: string, value: string}[] {
      return this.zmAssetbarService.getPredicates();
    }

    /**
     *
     * @param predicate
     */
    setPredicate(predicate: number): void {
      this.zmAssetbarService.setPredicate(predicate);
    }

    /**
     *
     * @param reverse
     */
    setReverse(reverse: boolean): void {
      this.zmAssetbarService.setReverse(reverse);
    }

    /**
     *
     * @param columns
     */
    setColumns(columns: number): void {
      this.zmAssetbarService.setColumns(columns);
    }

    /**
     *
     */
    private init() {
      this._items = [];

      this._items.push({
        icon: 'icon-shopping',
        label: 'Branch'
      });

      this._items.push({
        icon: 'icon-cake',
        label: 'Themes',
        disabled: true
      });

      this._items.push({
        icon: 'icon-filter-variant',
        label: 'Filter'
      });

      this._items.push({
        icon: 'icon-swap-vertical',
        label: 'Sort'
      });

      this._items.push({
        icon: 'icon-apps',
        label: 'View'
      });
    }
  }

  angular.module('create.assetbar.components.assettoolbar', [])
    .controller('zmCreateAssettoolbarController', Assettoolbar)
    .component('zmCreateAssettoolbar', {
      templateUrl: 'app/main/create/assetbar/components/assettoolbar/assettoolbar.html',
      controller: 'zmCreateAssettoolbarController as vm',
      bindings: {}
    });
})();
