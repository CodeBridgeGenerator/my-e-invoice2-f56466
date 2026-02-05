
    module.exports = function (app) {
        const modelName = "invoices";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            invoiceType: { type: Schema.Types.ObjectId, ref: "e_invoice_types", comment: "Invoice Type, dropdown, false, true, true, true, true, true, true, eInvoiceTypes, e_invoice_types, one-to-one, eInvoiceTypes," },
invoiceDateAndTime: { type: Date, comment: "Invoice Date and Time, p_calendar, false, true, true, true, true, true, true, , , , ," },
originalEInvoiceReferenceNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Original e-Invoice Reference Number, p, false, true, true, true, true, true, true, , , , ," },
no: { type: Number, max: 1000000, comment: "No, p_number, false, true, true, true, true, true, true, , , , ," },
classification: { type: Schema.Types.ObjectId, ref: "classification_codes", comment: "Classification, dropdown, false, true, true, true, true, true, true, classificationCodes, classification_codes, one-to-one, classificationCode," },
subtotal: { type: Number, max: 1000000, comment: "Sub total, p, false, false, false, false, false, true, false, , , , ," },
countryOfOrigin: { type: Schema.Types.ObjectId, ref: "country_codes", comment: "Country of Origin, dropdown, false, true, true, true, true, true, true, countryCodes, country_codes, one-to-one, countryCode," },
totalExcludingTax: { type: Number, max: 1000000, comment: "Total Excluding Tax, p, false, false, false, false, false, true, false, , , , ," },
taxType: { type: Schema.Types.ObjectId, ref: "tax_types", comment: "Tax Type, dropdown, false, true, true, false, true, true, false, taxTypes, tax_types, one-to-one, taxType," },
taxRate: { type: Number, max: 1000000, comment: "Tax Rate (%), p, false, true, true, true, true, true, false, , , , ," },
taxAmount: { type: Number, max: 1000000, comment: "Tax Amount, p, false, true, true, true, true, true, false, , , , ," },
detailsOfExemption: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Details of Exemption, p, false, true, true, true, true, true, false, , , , ," },
amountExempted: { type: Number, max: 1000000, comment: "Amount Exempted, p, false, true, true, true, true, true, false, , , , ," },
discountRate: { type: Number, max: 1000000, comment: "Discount Rate (%), p, false, true, true, true, true, true, false, , , , ," },
discountAmount: { type: Number, max: 1000000, comment: "Discount Amount, p, false, true, true, true, true, true, false, , , , ," },
description1: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Description 1, p, false, true, true, true, true, true, false, , , , ," },
feeChargeRate: { type: Number, max: 1000000, comment: "Fee/Charge Rate (%), p, false, true, true, true, true, true, false, , , , ," },
feeChargeAmount: { type: Number, max: 1000000, comment: "Fee/Charge Amount, p, false, true, true, true, true, true, false, , , , ," },
taxType1: { type: Schema.Types.ObjectId, ref: "tax_types", comment: "Tax Type 1, dropdown, false, true, true, true, true, true, false, taxTypes, tax_types, one-to-one, taxType," },
totalTaxableAmountPerTaxType: { type: Number, max: 1000000, comment: "Total Taxable Amount per Tax Type, p, false, true, true, true, true, true, false, , , , ," },
totalTaxAmountPerTaxType: { type: Number, max: 1000000, comment: "Total Tax Amount Per Tax Type, p, false, true, true, true, true, true, false, , , , ," },
detailsOfTaxExemption: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Details of Tax Exemption, p, false, true, true, true, true, true, true, , , , ," },
amountExemptedFromTax: { type: Number, max: 1000000, comment: "Amount Exempted from Tax, p_number, false, true, true, true, true, true, false, , , , ," },
discountAmount1: { type: Number, max: 1000000, comment: "Discount Amount 1, p_number, false, true, true, true, true, true, false, , , , ," },
description3: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Description 3, p, false, true, true, true, true, true, false, , , , ," },
feeAmount: { type: Number, max: 1000000, comment: "Fee Amount, p_number, false, true, true, true, true, true, false, , , , ," },
description4: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Description 4, p, false, true, true, true, true, true, false, , , , ," },
invoiceNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Invoice Number, p, false, true, true, true, true, true, true, , , , ," },
consolidated: { type: Boolean, required: false, comment: "Consolidated, tick, false, true, true, true, true, true, true, , , , ," },
teams: { type: Schema.Types.ObjectId, ref: "teams", comment: "Teams, p, false, false, false, false, false, false, false, teams, teams, one-to-one, name," },
buyer: { type: Schema.Types.ObjectId, ref: "companies", comment: "Buyer, dropdown, false, true, true, true, true, true, true, companies, companies, one-to-one, name," },
supplier: { type: Schema.Types.ObjectId, ref: "companies", comment: "Supplier, dropdown, false, true, true, true, true, true, true, companies, companies, one-to-one, name," },

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