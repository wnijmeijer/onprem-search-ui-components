declare global {
  interface Window {
    [propName: string]: any;
  }
}

export { ShowMore } from './components/ShowMore/ShowMore';
import { doInitialization } from './Initialization';
doInitialization();
