
    module.exports = function (app) {
        const modelName = "shipping";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            shippingRecipientsName: { type: Schema.Types.ObjectId, ref: "companies", comment: "Shipping Recipient's Name, dropdown, false, true, true, true, true, true, true, companies, companies, one-to-one, name," },
shippingRecipientsAddressCountryName: { type: Schema.Types.ObjectId, ref: "country_codes", comment: "Shipping Recipient’s Address(Country name), dropdown, false, true, true, true, true, true, true, countryCodes, country_codes, one-to-one, countryCode," },
shippingRecipientsAddressStateName: { type: Schema.Types.ObjectId, ref: "state_codes", comment: "Shipping Recipient’s Address(State name), dropdown, false, true, true, true, true, true, true, stateCodes, state_codes, one-to-one, stateCode," },
shippingRecipientsAddressCityName: { type:  String , maxLength: 150, index: true, trim: true, comment: "Shipping Recipient’s Address(City name), p, false, true, true, true, true, true, true, , , , ," },
shippingRecipientsAddressPostalZone: { type: Number, max: 10000000, comment: "Shipping Recipient’s Address(Postal Zone), p_number, false, true, true, true, true, true, true, , , , ," },
shippingRecipientsTin: { type:  String , maxLength: 150, index: true, trim: true, comment: "Shipping Recipient's TIN, p, false, true, true, true, true, true, true, , , , ," },
shippingRecipientsIdentifierType: { type: Schema.Types.ObjectId, ref: "identify_type", comment: "Shipping Recipient's Identifier type, dropdown, false, true, true, true, true, true, true, identifyType, identify_type, one-to-one, identifyType," },
businessRegistrationNumberIdentificationNumberPassportNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Business registration number/ Identification number / Passport number, p, false, true, true, true, true, true, true, , , , ," },
billReferenceNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Bill  Reference Number, p, false, true, true, true, true, true, true, , , , ," },
referenceNumberOfCustomsFormNo19Etc: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Reference Number of Customs Form No.1, 9, etc., p, false, true, true, true, true, true, true, , , , ," },
incoterms: { type:  String , maxLength: 150, index: true, trim: true, comment: "Incoterms, p, false, true, true, true, true, true, true, , , , ," },
freeTradeAgreementFtaInformation: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Free Trade Agreement (FTA) Information, inputTextarea, false, true, true, true, true, true, true, , , , ," },
authorisationNumberForCertifiedExporter: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Authorisation Number for Certified Exporter, p, false, true, true, true, true, true, true, , , , ," },
referenceNumberOfCustomsFormNo2: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Reference Number of Customs Form No.2, p, false, true, true, true, true, true, true, , , , ," },

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