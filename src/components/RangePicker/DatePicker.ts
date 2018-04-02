import $$ = Coveo.$$;
import DateUtils = Coveo.DateUtils;
import Assert = Coveo.Assert;
import { IDatePicker_i18n } from './DatePicker_i18n';

declare const require: (module: string) => any;
const Pikaday = require('pikaday'); // This is necessary since the Pikaday library is not accessible from the Coveo class.

/**
 * This class will create a date picker meant to be used inside the {@link FacetRangePicker} component.
 *
 */
export class DatePicker {
  private element: HTMLInputElement | undefined;
  private picker: any; // Since Pikaday can't be resolve
  private wasReset = false;

  /**
   * Create a new date picker.
   * @param onChange will be called every time the date picker change it's value. `this` will be the `DatePicker​​` instance.
   */
  constructor(public onChange: () => void = () => void 0, public i18n: IDatePicker_i18n, public format: string) {
    this.buildContent();
  }

  /**
   * Check if the picker was reset
   * @returns {boolean}
   */
  isReset(): boolean {
    return this.wasReset;
  }

  /**
   * Shortcut for picker.gotoDate(new Date())
   */
  gotoToday() {
    this.picker.gotoToday();
  }

  /**
   * Reset the date picker
   */
  reset() {
    this.picker.setDate(undefined);
    this.wasReset = true;
  }

  getElement(): HTMLInputElement {
    Assert.exists(this.element);
    return this.element as HTMLInputElement;
  }

  clearInput(): void {
    Assert.exists(this.element);
    (this.element as HTMLInputElement).value = '';
  }

  toggleClass(className: string, condition: boolean): void {
    Assert.exists(this.element);
    $$(this.element as HTMLElement).toggleClass(className, condition);
  }

  /**
   * Get the current value for the date picker.
   * @returns {string}
   */
  getValue(): string {
    if (this.wasReset) {
      return '';
    }
    const date = this.picker.getDate();
    return date ? DateUtils.dateForQuery(this.picker.getDate()) : '';
  }

  /**
   * Set the current value for the date picker.
   * @param date
   */
  setValue(date: Date, preventOnSelect = false) {
    this.picker.setDate(date, preventOnSelect);
    this.wasReset = false;
  }

  private buildContent() {
    this.element = $$('input', { className: 'coveo-button' }).el as HTMLInputElement;
    this.element.readOnly = true;
    const pickerOptions = {
      field: this.element,
      position: 'bottom left',
      onSelect: () => {
        this.wasReset = false;
        this.onChange();
      },
      i18n: {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      format: this.format
    };

    if (this.i18n) {
      pickerOptions.i18n = this.i18n;
    }

    this.picker = new Pikaday(pickerOptions);
  }
}
