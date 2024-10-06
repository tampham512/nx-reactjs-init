import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());
// if (process.env.NODE_ENV === 'production') {
//   console.log = () => {
//     //remove log
//   };
//   console.error = () => {
//     //remove log
//   };
//   console.debug = () => {
//     //remove log
//   };
// }
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mock/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
});
