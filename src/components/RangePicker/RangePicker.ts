import {
  ComponentOptions,
  Component,
  l,
  DateUtils,
  PopulateBreadcrumbEventArgs,
  BreadcrumbEvents,
  QuerySuccessEventArgs,
  QueryEvents,
  BuildingQueryEventArgs,
  AttributeChangedEventArg,
  ComponentBindings,
  Model
} from 'coveo-search-ui';

declare const require: (module: string) => any;
require('./sass/RangePicker.scss');
import * as DateRange from 'daterangepicker';
import * as moment from 'moment';

export interface IInputChangeEventArgs {
  from: number;
  to: number;
  this: any;
}

export class RangePickerEvent {
  static inputChange = 'inputChange';
  static clear = 'clear';
}

export interface IRangePickerOptions {
  id?: string;
  title?: string;
  field: string;
  format?: string;
  inputPlaceholder?: string;
}

export class RangePicker extends Component {
  /**
   * @componentOptions
   */
  static options: IRangePickerOptions = {
    /**
     * Specifies a unique identifier for the Component. Among other things, this identifier serves the purpose of saving the
     * component state in the URL hash.
     *
     * Default value is the concatenation of {@link RangePicker.options.fieldFrom} and {@link RangePicker.options.fieldTo} option value.
     */
    id: ComponentOptions.buildStringOption({
      postProcessing: (value: string, options: IRangePickerOptions) => value || _.unique(options.field).join('')
    }),

    /**
     * Specifies the title to display at the top of the Component.
     *
     * Default value is the localized string for `"NoTitle"`.
     */
    title: ComponentOptions.buildLocalizedStringOption({ defaultValue: l('NoTitle') }),

    /**
     * Specifies the index field whose values the Facet should use.
     * This field will be used to filter out all results with inferior value.
     *
     * The field should represent numerical values for this component to work.
     *
     * Default value is the string `"@sysdate"`.
     */
    field: ComponentOptions.buildLocalizedStringOption({ defaultValue: '@sysdate', required: true }),

    /*langCode: ComponentOptions.buildStringOption({ defaultValue: 'en' }),*/

    format: ComponentOptions.buildStringOption({ defaultValue: 'DD-MM-YYYY' }),

    inputPlaceholder: ComponentOptions.buildStringOption({ defaultValue: 'Select a date...' })
  };

  static ID: string = 'RangePicker';
  // Default value for from and to
  static DEFAULT: number = -1;

  private pickerFrom: DateRange;

  private from: number = RangePicker.DEFAULT;
  private to: number = RangePicker.DEFAULT;
  private facetHeader: Coveo.FacetHeader;
  private rangePickerQueryStateAttribute: string = '';

  /**
   * Creates an instance of RangePicker. Binds multiple query events as well.
   *
   * @param {HTMLElement} element The HTMLElement on which to instantiate the component.
   * @param {IRangePickerOptions} options The options for the Facet component.
   * @param {IComponentBindings} [bindings] The bindings that the component requires to function normally. If not set, these will be
   * automatically resolved (with a slower execution time).
   */
  constructor(public element: HTMLElement, public options: IRangePickerOptions, bindings?: ComponentBindings) {
    super(element, RangePicker.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, RangePicker, options);

    this.initQueryEvents();
    this.initQueryStateEvents();
  }

  createDom() {
    this.buildFacetContent();
    this.updateAppearanceDependingOnState();
  }

  /**
   * Resets the Component by reseting its inputs and redrawing the component.
   *
   * @param {boolean} [executeQuery=true] Specifies whether to execute the query once the component has been reset
   */
  reset(executeQuery: boolean = true) {
    this.ensureDom();
    this.pickerFrom.setStartDate(undefined);
    this.pickerFrom.setEndDate(undefined);
    const range = { from: RangePicker.DEFAULT, to: RangePicker.DEFAULT, this: this };
    Coveo.$('#' + this.getId('start')).val(this.options.inputPlaceholder);
    this.logger.info('reset', executeQuery);
    this.onChange(range, true);
    this.updateAppearanceDependingOnState();
  }

  private buildFacetContent() {
    this.buildHeader();

    this.buildContent();
  }

  private buildContent() {
    const inner = Coveo.$('<div class="inner-content"></div>').appendTo(this.element);
    this.buildPickerInputSection(inner);

    this.buildInputFrom(document.getElementById(this.getId('start')));
  }

  private buildPickerInputSection(parent: any) {
    const inputSection = Coveo.$('<div class="coveo-facet-values"></div>').appendTo(parent);

    inputSection.append(this.buildPickerinputRow('Start', this.getId('start')));
  }

  private getId(extra?: string): string {
    let id = `${this.options.id}${extra ? '-' + extra : ''}`;
    return id.replace('@', '');
  }

  private buildPickerinputRow(labelCaption: string, id: string): any {
    const inputRow = Coveo.$('<div class="flex input-row"></div>');
    inputRow.append(Coveo.$('<div class="input-label"></div>')); //.text(labelCaption));
    inputRow.append(
      Coveo.$("<input type='text' autocapitalize='off' readonly=true autocorrect='off' class='coveo-facet-search-input'/>")
        .attr('id', id)
        .attr('value', this.options.inputPlaceholder)
    );

    //inputRow.append($$('label', { for: id, className: 'calendar-icon' }, SVGIcons.icons.calendar).el);
    return inputRow;
  }

  private buildHeader() {
    var _this = this;
    this.facetHeader = new Coveo.FacetHeader({
      field: this.options.field,
      facetElement: Coveo.$(this.element),
      title: this.options.title,
      enableClearElement: true,
      enableCollapseElement: true,
      onEraserClick: function() {
        _this.reset();
        _this.queryController.executeQuery();
      },
      isLightningDesign: this.getBindings().searchInterface.isNewDesign()
    });
    this.facetHeader.build().appendTo(this.element);
  }

  private buildInputFrom(id: HTMLElement) {
    var _this = this;
    this.pickerFrom = new DateRange(
      id,
      {
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment()
              .subtract(1, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month')
          ]
        },
        autoUpdateInput: false,
        locale: {
          format: this.options.format
        },
        startDate: moment(),
        endDate: moment()
      },
      function(start, end, label) {
        //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        const range = {
          from: start ? start.valueOf() : RangePicker.DEFAULT,
          to: end ? end.valueOf() : RangePicker.DEFAULT,
          this: this,
          executeQuery: false
        };
        $(this.element).val(
          _this.pickerFrom.startDate.format(_this.options.format) + ' - ' + _this.pickerFrom.endDate.format(_this.options.format)
        );
        const executeQuery = range.from !== this.from || range.to !== this.to;
        range.executeQuery = executeQuery;
        _this.onChange(range, executeQuery);
      }
    );
  }

  private updateAppearanceDependingOnState() {
    if (document.getElementById(this.getId('start'))) {
      const isActive = this.from != RangePicker.DEFAULT && this.to != RangePicker.DEFAULT;
      Coveo.$(this.facetHeader.eraserElement).fastToggle(isActive);
    }
  }

  private onChange(range: IInputChangeEventArgs, executeQuery): void {
    this.queryStateModel.set(this.rangePickerQueryStateAttribute, range);
    Coveo.$(this.element).trigger(RangePickerEvent.inputChange, range);
    if (executeQuery) {
      this.triggerNewQuery(function() {
        return '';
      });
    }
  }

  public triggerNewQuery(beforeExecuteQuery: () => void) {
    this.queryController.executeQuery({ ignoreWarningSearchEvent: true, beforeExecuteQuery: beforeExecuteQuery });
  }

  private getQuery(): string | null {
    if (this.from === RangePicker.DEFAULT && this.to === RangePicker.DEFAULT) {
      return null;
    }

    const query = [];
    if (this.from !== RangePicker.DEFAULT) {
      const fromDate = new Date(this.from);
      query.push(this.options.field + ' >= ' + moment(fromDate).format('YYYY/MM/DD'));
    }
    if (this.to !== RangePicker.DEFAULT) {
      const toDate = new Date(this.to);
      query.push(this.options.field + ' <= ' + moment(toDate).format('YYYY/MM/DD'));
    }
    return query.join(' AND ');
  }

  private handleBuildingQuery(e, args: BuildingQueryEventArgs) {
    const query = this.getQuery();
    if (query !== null) {
      args.queryBuilder.advancedExpression.add(query);
    }
  }

  private handleDeferredQuerySuccess(e, args: QuerySuccessEventArgs) {
    this.ensureDom();
    if (this.from === RangePicker.DEFAULT) {
      this.pickerFrom.setStartDate(undefined);
    } else {
      this.pickerFrom.setStartDate(new Date(this.from));
    }

    if (this.to === RangePicker.DEFAULT) {
      this.pickerFrom.setEndDate(undefined);
    } else {
      this.pickerFrom.setEndDate(new Date(this.to));
    }

    this.updateAppearanceDependingOnState();
  }

  private initQueryEvents() {
    this.bind.onRoot(RangePickerEvent.inputChange, (args: RangePickerEvent) => {
      // this.queryStateModel.set(this.rangePickerQueryStateAttribute, args);
    });

    this.bind.onRoot(QueryEvents.deferredQuerySuccess, this.handleDeferredQuerySuccess);
    this.bind.onRoot(QueryEvents.buildingQuery, this.handleBuildingQuery);
    this.bind.onRoot(BreadcrumbEvents.populateBreadcrumb, this.handlePopulateBreadcrumb);
    this.bind.onRoot(BreadcrumbEvents.clearBreadcrumb, this.handleClearBreadcrumb);
  }

  private initQueryStateEvents() {
    this.rangePickerQueryStateAttribute = this.options.id + ':rangePicker';

    this.queryStateModel.registerNewAttribute(this.rangePickerQueryStateAttribute, { from: RangePicker.DEFAULT, to: RangePicker.DEFAULT });
    const eventName = this.queryStateModel.getEventName(Model.eventTypes.changeOne + this.rangePickerQueryStateAttribute);

    this.bind.onRoot(eventName, (e, args: AttributeChangedEventArg) => {
      this.handleQueryStateChanged(args.value);
    });
  }

  private handleQueryStateChanged(state: IInputChangeEventArgs) {
    this.ensureDom();
    const from = Number(state.from);
    const to = Number(state.to);

    if (!isNaN(from) && DateUtils.isValid(new Date(from))) {
      this.from = from;
    } else {
      this.from = RangePicker.DEFAULT;
    }

    if (!isNaN(to) && DateUtils.isValid(new Date(to))) {
      this.to = to;
    } else {
      this.to = RangePicker.DEFAULT;
    }
  }

  private handlePopulateBreadcrumb(e, args: PopulateBreadcrumbEventArgs) {
    const breadcrumb = this.populateBreadcrumb();
    if (breadcrumb !== null) {
      args.breadcrumbs.push({
        element: breadcrumb
      });
    }
  }

  private hasEmptyState(): boolean {
    return this.from === RangePicker.DEFAULT && this.to === RangePicker.DEFAULT;
  }

  private populateBreadcrumb(): HTMLElement | null {
    if (this.hasEmptyState()) {
      return null;
    }

    const range: string[] = [];

    /* Here, handling date format;
        - we dont have at this level the same library as in CustomDatePicker to handle the date format string
        - we are therefore using the values generated by CustomDatePicker
    */
    if (this.from !== RangePicker.DEFAULT) {
      const fromDate = new Date(this.from);
      try {
        range.push(l('From').toLowerCase() + ' ' + moment(fromDate).format(this.options.format));
      } catch (e) {
        //range.push('from ' + DateUtils.dateForQuery(fromDate));
      }
    }

    if (this.to !== RangePicker.DEFAULT) {
      const toDate = new Date(this.to);
      try {
        range.push(l('To').toLowerCase() + ' ' + moment(toDate).format(this.options.format));
      } catch (e) {
        //range.push('to ' + DateUtils.dateForQuery(toDate));
      }
    }
    const element = Coveo.$('<div class="coveo-facet-breadcrumb coveo-breadcrumb-item vin-breadcrumb"></div>');

    const title = Coveo.$('<div class="coveo-facet-breadcrumb-title"></div>').text(this.options.title + ': ');
    title.appendTo(element);

    const value = Coveo.$('<span class="coveo-facet-breadcrumb-value coveo-selected"></span>');
    value.appendTo(title);

    value.on('click', () => {
      this.reset();
    });

    const caption = Coveo.$('<span class="coveo-facet-breadcrumb-caption"></span>').text(range.join(' '));
    caption.appendTo(value);

    const eraser = Coveo.$('<span class="coveo-facet-breadcrumb-clear"></span>');
    eraser.appendTo(value);

    return element[0];
    //return element.get(0);
  }

  private handleClearBreadcrumb(e) {
    this.reset(false);
  }
}

Coveo.CoveoJQuery.registerAutoCreateComponent(RangePicker);
