const config = require('./config.json');
const errors = {};

Object.keys(config).forEach((group) => {
   Object.keys(config[group]).forEach((definition) => {
      // Sets name accoring to config
      const name = [
         group[0].toUpperCase(),
         group.slice(1),
         definition[0].toUpperCase(),
         definition.slice(1),
         'Error'
      ].join('');

      const code = `E_${group.toUpperCase()}_${definition.toUpperCase()}`;
      const message = config[group][definition].message;

      errors[name] = class extends Error {
         constructor(payload) {
            super(payload);

            this.code = code;
            this.message = message;

            if (typeof payload !== 'undefined') {
               
               this.symbol = payload.text || '';
               this.message = payload.message || message;
               this.payload = payload;
               this.stack = payload.stack? payload.stack: this.stack;
            }


         }
      };
   });
});

module.exports = errors;