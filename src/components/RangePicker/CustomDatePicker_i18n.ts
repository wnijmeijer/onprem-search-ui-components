// import { RangePicker } from './RangePicker';

// export interface ICustomDatePicker_i18n {
//   previousMonth: string;
//   nextMonth: string;
//   months: [string];
//   weekdays: [string];
//   weekdaysShort: [string];
// }

// export class CustomDatePicker_i18n {
//   static LANG_ENG: string = 'en';

//   private i18nDictionary: any = {
//     en: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//       weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     fr: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
//       weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
//       weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
//     },
//     es: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//       weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
//       weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
//     },
//     de: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
//       weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
//       weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
//     },
//     it: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
//       weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
//       weekdaysShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']
//     },
//     nl_NL: {
//       previousMonth: 'Previous Month',
//       nextMonth: 'Next Month',
//       months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
//       weekdays: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
//       weekdaysShort: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']
//     }
//   };

//   constructor(public rangePicker: RangePicker) {

//   }

//   getDefaultI18nConfig() {
//     this.getI18nConfig('en');
//     return this.i18nDictionary['en'];
//   }

//   getAvailableLanguageCodes(): string[] {
//     return Object.keys(this.i18nDictionary);
//   }

//   getI18nConfig(langCode: string): ICustomDatePicker_i18n {
//     if (this.getAvailableLanguageCodes().indexOf(langCode) === -1) {
//       this.rangePicker.logger.warn(`Unknown language code: ${langCode}`);
//       return this.getDefaultI18nConfig();
//     } else {
//       return this.i18nDictionary[langCode];
//     }
//   }

// }
