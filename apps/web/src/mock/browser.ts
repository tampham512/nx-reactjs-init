import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Initialize the Service Worker with the mock API handlers
export const worker = setupWorker(...handlers);
