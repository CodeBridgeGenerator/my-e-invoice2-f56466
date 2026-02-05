const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("invoices service", () => {
  let thisService;
  let invoiceCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("invoices");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (invoices)");
  });

  describe("#create", () => {
    const options = {"invoiceType":"aasdfasdfasdfadsfadfa","invoiceDateAndTime":1770257326446,"originalEInvoiceReferenceNumber":"new value","no":23,"classification":"aasdfasdfasdfadsfadfa","subtotal":23,"countryOfOrigin":"aasdfasdfasdfadsfadfa","totalExcludingTax":23,"taxType":"aasdfasdfasdfadsfadfa","taxRate":23,"taxAmount":23,"detailsOfExemption":"new value","amountExempted":23,"discountRate":23,"discountAmount":23,"description1":"new value","feeChargeRate":23,"feeChargeAmount":23,"taxType1":"aasdfasdfasdfadsfadfa","totalTaxableAmountPerTaxType":23,"totalTaxAmountPerTaxType":23,"detailsOfTaxExemption":"new value","amountExemptedFromTax":23,"discountAmount1":23,"description3":"new value","feeAmount":23,"description4":"new value","invoiceNumber":"new value","consolidated":true,"teams":"aasdfasdfasdfadsfadfa","buyer":"aasdfasdfasdfadsfadfa","supplier":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      invoiceCreated = await thisService.create({...options, ...users});
    });

    it("should create a new invoice", () => {
      assert.strictEqual(invoiceCreated.invoiceType, options.invoiceType);
assert.strictEqual(invoiceCreated.invoiceDateAndTime, options.invoiceDateAndTime);
assert.strictEqual(invoiceCreated.originalEInvoiceReferenceNumber, options.originalEInvoiceReferenceNumber);
assert.strictEqual(invoiceCreated.no, options.no);
assert.strictEqual(invoiceCreated.classification, options.classification);
assert.strictEqual(invoiceCreated.subtotal, options.subtotal);
assert.strictEqual(invoiceCreated.countryOfOrigin, options.countryOfOrigin);
assert.strictEqual(invoiceCreated.totalExcludingTax, options.totalExcludingTax);
assert.strictEqual(invoiceCreated.taxType, options.taxType);
assert.strictEqual(invoiceCreated.taxRate, options.taxRate);
assert.strictEqual(invoiceCreated.taxAmount, options.taxAmount);
assert.strictEqual(invoiceCreated.detailsOfExemption, options.detailsOfExemption);
assert.strictEqual(invoiceCreated.amountExempted, options.amountExempted);
assert.strictEqual(invoiceCreated.discountRate, options.discountRate);
assert.strictEqual(invoiceCreated.discountAmount, options.discountAmount);
assert.strictEqual(invoiceCreated.description1, options.description1);
assert.strictEqual(invoiceCreated.feeChargeRate, options.feeChargeRate);
assert.strictEqual(invoiceCreated.feeChargeAmount, options.feeChargeAmount);
assert.strictEqual(invoiceCreated.taxType1, options.taxType1);
assert.strictEqual(invoiceCreated.totalTaxableAmountPerTaxType, options.totalTaxableAmountPerTaxType);
assert.strictEqual(invoiceCreated.totalTaxAmountPerTaxType, options.totalTaxAmountPerTaxType);
assert.strictEqual(invoiceCreated.detailsOfTaxExemption, options.detailsOfTaxExemption);
assert.strictEqual(invoiceCreated.amountExemptedFromTax, options.amountExemptedFromTax);
assert.strictEqual(invoiceCreated.discountAmount1, options.discountAmount1);
assert.strictEqual(invoiceCreated.description3, options.description3);
assert.strictEqual(invoiceCreated.feeAmount, options.feeAmount);
assert.strictEqual(invoiceCreated.description4, options.description4);
assert.strictEqual(invoiceCreated.invoiceNumber, options.invoiceNumber);
assert.strictEqual(invoiceCreated.consolidated, options.consolidated);
assert.strictEqual(invoiceCreated.teams, options.teams);
assert.strictEqual(invoiceCreated.buyer, options.buyer);
assert.strictEqual(invoiceCreated.supplier, options.supplier);
    });
  });

  describe("#get", () => {
    it("should retrieve a invoice by ID", async () => {
      const retrieved = await thisService.findById(invoiceCreated._id);
      assert.strictEqual(retrieved._id.toString(), invoiceCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"invoiceType":"345345345345345345345","invoiceDateAndTime":null,"originalEInvoiceReferenceNumber":"updated value","no":100,"classification":"345345345345345345345","subtotal":100,"countryOfOrigin":"345345345345345345345","totalExcludingTax":100,"taxType":"345345345345345345345","taxRate":100,"taxAmount":100,"detailsOfExemption":"updated value","amountExempted":100,"discountRate":100,"discountAmount":100,"description1":"updated value","feeChargeRate":100,"feeChargeAmount":100,"taxType1":"345345345345345345345","totalTaxableAmountPerTaxType":100,"totalTaxAmountPerTaxType":100,"detailsOfTaxExemption":"updated value","amountExemptedFromTax":100,"discountAmount1":100,"description3":"updated value","feeAmount":100,"description4":"updated value","invoiceNumber":"updated value","consolidated":false,"teams":"345345345345345345345","buyer":"345345345345345345345","supplier":"345345345345345345345"};

    it("should update an existing invoice ", async () => {
      const invoiceUpdated = await thisService.findByIdAndUpdate(
        invoiceCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(invoiceUpdated.invoiceType, options.invoiceType);
assert.strictEqual(invoiceUpdated.invoiceDateAndTime, options.invoiceDateAndTime);
assert.strictEqual(invoiceUpdated.originalEInvoiceReferenceNumber, options.originalEInvoiceReferenceNumber);
assert.strictEqual(invoiceUpdated.no, options.no);
assert.strictEqual(invoiceUpdated.classification, options.classification);
assert.strictEqual(invoiceUpdated.subtotal, options.subtotal);
assert.strictEqual(invoiceUpdated.countryOfOrigin, options.countryOfOrigin);
assert.strictEqual(invoiceUpdated.totalExcludingTax, options.totalExcludingTax);
assert.strictEqual(invoiceUpdated.taxType, options.taxType);
assert.strictEqual(invoiceUpdated.taxRate, options.taxRate);
assert.strictEqual(invoiceUpdated.taxAmount, options.taxAmount);
assert.strictEqual(invoiceUpdated.detailsOfExemption, options.detailsOfExemption);
assert.strictEqual(invoiceUpdated.amountExempted, options.amountExempted);
assert.strictEqual(invoiceUpdated.discountRate, options.discountRate);
assert.strictEqual(invoiceUpdated.discountAmount, options.discountAmount);
assert.strictEqual(invoiceUpdated.description1, options.description1);
assert.strictEqual(invoiceUpdated.feeChargeRate, options.feeChargeRate);
assert.strictEqual(invoiceUpdated.feeChargeAmount, options.feeChargeAmount);
assert.strictEqual(invoiceUpdated.taxType1, options.taxType1);
assert.strictEqual(invoiceUpdated.totalTaxableAmountPerTaxType, options.totalTaxableAmountPerTaxType);
assert.strictEqual(invoiceUpdated.totalTaxAmountPerTaxType, options.totalTaxAmountPerTaxType);
assert.strictEqual(invoiceUpdated.detailsOfTaxExemption, options.detailsOfTaxExemption);
assert.strictEqual(invoiceUpdated.amountExemptedFromTax, options.amountExemptedFromTax);
assert.strictEqual(invoiceUpdated.discountAmount1, options.discountAmount1);
assert.strictEqual(invoiceUpdated.description3, options.description3);
assert.strictEqual(invoiceUpdated.feeAmount, options.feeAmount);
assert.strictEqual(invoiceUpdated.description4, options.description4);
assert.strictEqual(invoiceUpdated.invoiceNumber, options.invoiceNumber);
assert.strictEqual(invoiceUpdated.consolidated, options.consolidated);
assert.strictEqual(invoiceUpdated.teams, options.teams);
assert.strictEqual(invoiceUpdated.buyer, options.buyer);
assert.strictEqual(invoiceUpdated.supplier, options.supplier);
    });
  });

  describe("#delete", () => {
    it("should delete a invoice", async () => {
      const invoiceDeleted = await thisService.remove(invoiceCreated._id);
      assert.strictEqual(invoiceDeleted._id.toString(), invoiceCreated._id.toString());
    });
  });
});