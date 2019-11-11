import {
  Component,
  ComponentOptions,
  ComponentBindings,
  BuildingQueryEventArgs,
  QueryEvents
  
} from 'coveo-search-ui';

export interface IScopeSelectorOptions {
  scopes?: any;
}

export class ScopeSelector extends Component implements ComponentBindings {
  static ID = 'ScopeSelector';

  static options: IScopeSelectorOptions = {
    scopes: ComponentOptions.buildCustomOption(() => {
      return null;
    }),
  };

  constructor(public element: HTMLElement, public options: IScopeSelectorOptions, public bindings: ComponentBindings) {
    super(element, ScopeSelector.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, ScopeSelector, options);

    this.bindEvents();
  }

  private bindEvents() {
    this.bind.onRoot(QueryEvents.buildingQuery, this.handleQuery);
  }

  private handleQuery(e, args: BuildingQueryEventArgs) {
    //Add the proper scope based upon the current selected interface
    var currentTab = args.queryBuilder.tab;
    this.logger.info('ScopeSelector Current TAB', currentTab);
    var scope = '';
    scope = this.options.scopes[currentTab] || scope;
    if (scope!=''){
      this.logger.info('ScopeSelector Scope', scope);
      Coveo.SearchEndpoint.endpoints.default.options.queryStringArguments.scope = scope;
    }
  }

}

Coveo.CoveoJQuery.registerAutoCreateComponent(ScopeSelector);
