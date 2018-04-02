declare global {
  interface Window {
    [propName: string]: any;
  }
}

export { ShowMore } from './components/ShowMore/ShowMore';
export { RangePicker } from './components/RangePicker/RangePicker';
import { doInitialization } from './Initialization';
doInitialization();
