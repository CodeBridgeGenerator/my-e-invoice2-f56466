
    module.exports = function (app) {
        const modelName = "suppliers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            suppliersName: { type: Schema.Types.ObjectId, ref: "companies", comment: "Supplier's Name, dropdown, false, true, true, false, false, false, true, companies, companies, one-to-one, name," },
suppliersTin: { type:  String , minLength: 2, maxLength: 1000, index: true, comment: "Supplier's TIN, p, false, true, true, false, true, true, true, , , , ," },
suppliersSstRegistrationNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's SST Registration Number, p, false, true, true, true, true, true, true, , , , ," },
identifierType: { type: Schema.Types.ObjectId, ref: "identify_type", comment: "Identifier Type, dropdown, false, true, true, true, true, true, true, identifyType, identify_type, one-to-one, identifyType," },
identifierNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Identifier Number, p, false, true, true, true, true, true, true, , , , ," },
suppliersMsicCode: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's MSIC code, p, false, true, true, true, true, true, true, , , , ," },
suppliersTourismTaxRegistrationNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's Tourism Tax Registration Number, p, false, true, true, true, true, true, true, , , , ," },
suppliersBusinessActivityDescription: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's Business Activity Description, p, false, true, true, true, true, true, true, , , , ," },
suppliersEMail: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's e-mail, p, false, true, true, true, true, true, true, , , , ," },
theFirstSuppliersContactNumber: { type: Schema.Types.ObjectId, ref: "phone_number_prefix", comment: "The first Supplier's contact number, dropdown, false, true, true, true, true, true, true, phoneNumberPrefix, phone_number_prefix, one-to-one, phoneNumberPrefix," },
suppliersContactNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier's contact number, p, false, true, true, true, true, true, true, , , , ," },
countryName: { type: Schema.Types.ObjectId, ref: "country_codes", comment: "Country name, dropdown, false, true, true, true, true, true, true, countryCodes, country_codes, one-to-one, countryCode," },
stateName: { type: Schema.Types.ObjectId, ref: "state_codes", comment: "State name, dropdown, false, true, true, true, true, true, true, stateCodes, state_codes, one-to-one, stateCode," },
cityName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "City name, p, false, true, true, true, true, true, true, , , , ," },
postalZone: { type:  String , maxLength: 150, index: true, trim: true, comment: "Postal zone, p, false, true, true, true, true, true, true, , , , ," },
suppliersBankAccountNumber: { type: Number, max: 1000000, comment: "Supplier's Bank Account Number, p_number, false, true, true, true, true, true, true, , , , ," },
paymentTerms: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Payment Terms, p, false, true, true, true, true, true, true, , , , ," },
prePaymentAmount: { type: Number, max: 1000000, comment: "PrePayment Amount, p_number, false, true, true, true, true, true, true, , , , ," },
prePaymentDate: { type: Date, comment: "PrePayment Date, p_calendar, false, true, true, true, true, true, true, , , , ," },
prePaymentReferenceNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "PrePayment Reference Number, p, false, true, true, true, true, true, true, , , , ," },
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