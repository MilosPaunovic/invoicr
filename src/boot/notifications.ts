import { Notify } from 'quasar';

Notify.setDefaults({
  position: 'bottom-right',
  color: 'primary',
  textColor: 'white',
  timeout: process.env.ENVIRONMENT === 'local' ? 0 : 2000,
  actions: [{ label: 'close', color: 'white' }],
});
