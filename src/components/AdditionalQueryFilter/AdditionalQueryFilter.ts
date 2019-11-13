import {
  Component,
  ComponentOptions,
  ComponentBindings,
  BuildingQueryEventArgs,
  QueryEvents,
  AfterInitializationEventArgs
} from 'coveo-search-ui';

export interface IAdditionalQueryFilterOptions {
  fields?: string[];
  query?: string;
  filterquery?: string;
  filterquerynoresults?: string;
  scope?: string;
}

export class AdditionalQueryFilter extends Component implements ComponentBindings {
  static ID = 'AdditionalQueryFilter';

  private localStorage: Coveo.LocalStorageUtils<{}>;
  private retrievedInfo: any;

  static options: IAdditionalQueryFilterOptions = {
    fields: Coveo.ComponentOptions.buildListOption(),
    query: ComponentOptions.buildStringOption(),
    filterquery: ComponentOptions.buildStringOption(),
    filterquerynoresults: ComponentOptions.buildStringOption(),
    scope: ComponentOptions.buildStringOption()
  };

  constructor(public element: HTMLElement, public options: IAdditionalQueryFilterOptions, public bindings: ComponentBindings) {
    super(element, AdditionalQueryFilter.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, AdditionalQueryFilter, options);
    this.localStorage = new Coveo.LocalStorageUtils(AdditionalQueryFilter.ID);
    this.bindEvents();
  }

  private initInfo() {
    //Initialize retrievedInfo structure
    this.retrievedInfo = [];
    for (var i = 0; i < this.options.fields.length; i++) {
      this.retrievedInfo[this.options.fields[i]] = '';
    }
    this.retrievedInfo["Collected"]=false;
  }

  private bindEvents() {
    //Bind events
    this.bind.onRoot(Coveo.InitializationEvents.afterInitialization, this.handleAfterInitialization);
    this.bind.onRoot(QueryEvents.buildingQuery, this.handleQuery);
  }

  private handleQuery(e, args: BuildingQueryEventArgs) {
    //Add Advancedquery
    this.getStorage();
    if (this.retrievedInfo!= null){
      if (this.retrievedInfo["Collected"]==false) {
        //Cancel current query
        args.cancel = true;
        return;
      }
    }
    if (this.retrievedInfo["Collected"] == "Empty") {
      args.queryBuilder.advancedExpression.add(this.options.filterquerynoresults);
    } else {
      var query = this.options.filterquery;
      for (var i = 0; i < this.options.fields.length; i++) {
        query = query.replace('{FIELD' + (i + 1) + '}', this.retrievedInfo[this.options.fields[i]]);
      }
      args.queryBuilder.advancedExpression.add(query);
    }
  }

  private getStorage() {
    if (this.retrievedInfo==null){
      this.retrievedInfo = this.localStorage.load();
    }
  }

  private getFieldsFromIndex() {
    //Check if present in local storage
    var _this = this;
    var deferred = Coveo.$.Deferred();
    this.retrievedInfo = this.localStorage.load();
    if (this.retrievedInfo == null) {
      //Get it from the index
      this.initInfo();
      var query = new Coveo.QueryBuilder();
      query.numberOfResults = 1;
      query.expression.add(this.options.query);

      var builtQuery = query.build();

      if (this.options.scope != '') {
        Coveo.SearchEndpoint.endpoints.default.options.queryStringArguments.scope = this.options.scope;
      }
      this.queryController
        .getEndpoint()
        .search(builtQuery)
        .done(function(results) {
          
          if (results.totalCount > 0) {
            for (var i = 0; i < _this.options.fields.length; i++) {
              _this.retrievedInfo[_this.options.fields[i]] = results.results[0].raw[_this.options.fields[i].replace('@','')];
            }
            _this.retrievedInfo["Collected"]=true;
            _this.localStorage.save(_this.retrievedInfo);
          } else {
            _this.retrievedInfo["Collected"] = "Empty";
          }
          deferred.resolve(_this.queryController.executeQuery());
        });
    } else {
      deferred.resolve();
    }
    return deferred;
  }

  private handleAfterInitialization(e, args: AfterInitializationEventArgs) {
    //Clear local storage
    this.localStorage.remove();
    //Get item from query
    this.getFieldsFromIndex();
    
  }
}

Coveo.CoveoJQuery.registerAutoCreateComponent(AdditionalQueryFilter);
