import Component = Coveo.Component;
import Initialization = Coveo.Initialization;
import ComponentOptions = Coveo.ComponentOptions;
import IComponentBindings = Coveo.IComponentBindings;

export interface ICollapseAllOptions {
  CollapseText: string;
  ExpandText: string;
}

export class CollapseAll extends Component {
  static ID = 'CollapseAll';

  static options: ICollapseAllOptions = {
    CollapseText: ComponentOptions.buildStringOption({ defaultValue: 'Collapse all' }),
    ExpandText: ComponentOptions.buildStringOption({ defaultValue: 'Expand all' })
  };

  /**
   * Create a new CollapseAll
   * @param element
   * @param options
   * @param bindings
   * @param result
   */

  public anchor: HTMLElement;
  public isCollapsed: boolean = false; // Can set the initial state of your facets
  constructor(public element: HTMLElement, public options: ICollapseAllOptions, bindings?: IComponentBindings) {
    super(element, CollapseAll.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, CollapseAll, options);
    this.init();
  }

  public init() {
    this.anchor = Coveo.$$('a', {class:"collapse-all-link"}, this.options.CollapseText).el;
    Coveo.$$(this.element).append(this.anchor);
    Coveo.$$(this.element).on('click', () => this.isCollapsed ? this.expandAll() : this.collapseAll());

    // If isCollapsed has been set to true, collapse all facets on init
    if (this.isCollapsed) {
        this.collapseAll();
    }
  }

  public expandAll() {
    _.each(document.querySelectorAll('.CoveoFacet'), function(facet) {
        let facetObject: Coveo.Facet = <Coveo.Facet>Coveo.get(<HTMLElement>facet, Coveo.Facet);
        facetObject.expand();
    });

    this.anchor.textContent = this.options.CollapseText;
    this.isCollapsed = !this.isCollapsed;
  }

  public collapseAll() {
    _.each(document.querySelectorAll('.CoveoFacet'), function(facet) {
        let facetObject: Coveo.Facet = <Coveo.Facet>Coveo.get(<HTMLElement>facet, Coveo.Facet);
        facetObject.collapse();
    });

    this.anchor.textContent = this.options.ExpandText;
    this.isCollapsed = !this.isCollapsed;
  }
}

Initialization.registerAutoCreateComponent(CollapseAll);
