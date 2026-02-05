
    module.exports = function (app) {
        const modelName = "buyers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            buyersName: { type: Schema.Types.ObjectId, ref: "companies", comment: "Buyer's name (*), dropdown, false, true, true, true, true, true, true, companies, companies, one-to-one, name," },
buyersTin: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Buyer's TIN, p, false, true, true, true, true, true, true, , , , ," },
buyersSstRegistrationNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Buyer's SST Registration Number, p, false, true, true, true, true, true, true, , , , ," },
identifierType: { type: Schema.Types.ObjectId, ref: "identify_type", comment: "Identifier Type, dropdown, false, true, true, true, true, true, true, identifyType, identify_type, one-to-one, identifyType," },
businessRegistrationNumberIdentificationNumberPassportNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Business registration number / Identification number / Passport number, p, false, true, true, true, true, true, true, , , , ," },
buyersEMail: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Buyer's e-mail, p, false, true, true, true, true, true, true, , , , ," },
buyersAddressCountryName: { type: Schema.Types.ObjectId, ref: "country_codes", comment: "Buyer's address (Country name), dropdown, false, true, true, true, true, true, true, countryCodes, country_codes, one-to-one, countryCode," },
buyersAddressStateName: { type: Schema.Types.ObjectId, ref: "state_codes", comment: "Buyer's address (State name), dropdown, false, true, true, true, true, true, true, stateCodes, state_codes, one-to-one, stateCode," },
buyersAddressCityName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Buyer's address (City name), p, false, true, true, true, true, true, true, , , , ," },
buyersAddressPostalZone: { type: Number, max: 1000000, comment: "Buyer's address (Postal zone), p_number, false, true, true, true, true, true, true, , , , ," },
theFirstBuyersContactNumber: { type: Schema.Types.ObjectId, ref: "phone_number_prefix", comment: "The first buyer's contact number, dropdown, false, true, true, true, true, true, true, phoneNumberPrefix, phone_number_prefix, one-to-one, phoneNumberPrefix," },
buyersContactNumber: { type: Number, max: 1000000, comment: "Buyer's Contact Number, p_number, false, true, true, true, true, true, true, , , , ," },
invoiceCurrency: { type: Schema.Types.ObjectId, ref: "currency_codes", comment: "Invoice Currency, dropdown, false, true, true, true, true, true, true, currencyCodes, currency_codes, one-to-one, currencyCode," },
currencyExchangeRate: { type: Number, max: 1000000, comment: "Currency Exchange Rate, p_number, false, true, true, true, true, true, true, , , , ," },
frequencyOfBilling: { type: Schema.Types.ObjectId, ref: "frequency_of_billing", comment: "Frequency of Billing, dropdown, false, true, true, true, true, true, true, frequencyOfBilling, frequency_of_billing, one-to-one, frequencyOfBilling," },
billingPeriodStartDate: { type: Date, comment: "Billing Period Start Date, p_date, false, true, true, true, true, true, true, , , , ," },
billingPeriodEndDate: { type: Date, comment: "Billing Period End Date, p_date, false, true, true, true, true, true, true, , , , ," },
paymentMode: { type: Schema.Types.ObjectId, ref: "payment_modes", comment: "Payment Mode, dropdown, false, true, true, true, true, true, true, paymentModes, payment_modes, one-to-one, paymentMode," },
team: { type: Schema.Types.ObjectId, ref: "teams", comment: "Team, p, false, false, false, false, false, false, false, teams, teams, one-to-one, name," },
invoiceId: { type: Schema.Types.ObjectId, ref: "invoices", comment: "InvoiceId, p, false, false, false, false, false, false, false, invoices, invoices, one-to-one, invoiceType," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };