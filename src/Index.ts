declare global {
  interface Window {
    [propName: string]: any;
  }
}

import './Components';
import { doInitialization } from './Initialization';
doInitialization();
