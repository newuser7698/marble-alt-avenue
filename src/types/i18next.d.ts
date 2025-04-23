
// This file adds type declarations for i18next resources
import 'react-i18next';
import { resources } from '../i18n/index';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
