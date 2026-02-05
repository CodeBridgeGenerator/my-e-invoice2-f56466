const invoices = require("./invoices/invoices.service.js");
const products = require("./products/products.service.js");
const suppliers = require("./suppliers/suppliers.service.js");
const buyers = require("./buyers/buyers.service.js");
const shipping = require("./shipping/shipping.service.js");
const measurements = require("./measurements/measurements.service.js");
const identifyType = require("./identifyType/identifyType.service.js");
const eInvoiceTypes = require("./eInvoiceTypes/eInvoiceTypes.service.js");
const classificationCodes = require("./classificationCodes/classificationCodes.service.js");
const paymentModes = require("./paymentModes/paymentModes.service.js");
const frequencyOfBilling = require("./frequencyOfBilling/frequencyOfBilling.service.js");
const currencyCodes = require("./currencyCodes/currencyCodes.service.js");
const phoneNumberPrefix = require("./phoneNumberPrefix/phoneNumberPrefix.service.js");
const stateCodes = require("./stateCodes/stateCodes.service.js");
const countryCodes = require("./countryCodes/countryCodes.service.js");
const taxTypes = require("./taxTypes/taxTypes.service.js");
const teams = require("./teams/teams.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(invoices);
  app.configure(products);
  app.configure(suppliers);
  app.configure(buyers);
  app.configure(shipping);
  app.configure(measurements);
  app.configure(identifyType);
  app.configure(eInvoiceTypes);
  app.configure(classificationCodes);
  app.configure(paymentModes);
  app.configure(frequencyOfBilling);
  app.configure(currencyCodes);
  app.configure(phoneNumberPrefix);
  app.configure(stateCodes);
  app.configure(countryCodes);
  app.configure(taxTypes);
  app.configure(teams);
    // ~cb-add-configure-service-name~
};
