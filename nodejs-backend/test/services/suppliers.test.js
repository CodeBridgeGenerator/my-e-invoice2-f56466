const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("suppliers service", () => {
  let thisService;
  let supplierCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("suppliers");

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
    assert.ok(thisService, "Registered the service (suppliers)");
  });

  describe("#create", () => {
    const options = {"suppliersName":"aasdfasdfasdfadsfadfa","suppliersTin":"new value","suppliersSstRegistrationNumber":"new value","identifierType":"aasdfasdfasdfadsfadfa","identifierNumber":"new value","suppliersMsicCode":"new value","suppliersTourismTaxRegistrationNumber":"new value","suppliersBusinessActivityDescription":"new value","suppliersEMail":"new value","theFirstSuppliersContactNumber":"aasdfasdfasdfadsfadfa","suppliersContactNumber":"new value","countryName":"aasdfasdfasdfadsfadfa","stateName":"aasdfasdfasdfadsfadfa","cityName":"new value","postalZone":"new value","suppliersBankAccountNumber":23,"paymentTerms":"new value","prePaymentAmount":23,"prePaymentDate":1770257326558,"prePaymentReferenceNumber":"new value","team":"aasdfasdfasdfadsfadfa","invoiceId":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      supplierCreated = await thisService.create({...options, ...users});
    });

    it("should create a new supplier", () => {
      assert.strictEqual(supplierCreated.suppliersName, options.suppliersName);
assert.strictEqual(supplierCreated.suppliersTin, options.suppliersTin);
assert.strictEqual(supplierCreated.suppliersSstRegistrationNumber, options.suppliersSstRegistrationNumber);
assert.strictEqual(supplierCreated.identifierType, options.identifierType);
assert.strictEqual(supplierCreated.identifierNumber, options.identifierNumber);
assert.strictEqual(supplierCreated.suppliersMsicCode, options.suppliersMsicCode);
assert.strictEqual(supplierCreated.suppliersTourismTaxRegistrationNumber, options.suppliersTourismTaxRegistrationNumber);
assert.strictEqual(supplierCreated.suppliersBusinessActivityDescription, options.suppliersBusinessActivityDescription);
assert.strictEqual(supplierCreated.suppliersEMail, options.suppliersEMail);
assert.strictEqual(supplierCreated.theFirstSuppliersContactNumber, options.theFirstSuppliersContactNumber);
assert.strictEqual(supplierCreated.suppliersContactNumber, options.suppliersContactNumber);
assert.strictEqual(supplierCreated.countryName, options.countryName);
assert.strictEqual(supplierCreated.stateName, options.stateName);
assert.strictEqual(supplierCreated.cityName, options.cityName);
assert.strictEqual(supplierCreated.postalZone, options.postalZone);
assert.strictEqual(supplierCreated.suppliersBankAccountNumber, options.suppliersBankAccountNumber);
assert.strictEqual(supplierCreated.paymentTerms, options.paymentTerms);
assert.strictEqual(supplierCreated.prePaymentAmount, options.prePaymentAmount);
assert.strictEqual(supplierCreated.prePaymentDate, options.prePaymentDate);
assert.strictEqual(supplierCreated.prePaymentReferenceNumber, options.prePaymentReferenceNumber);
assert.strictEqual(supplierCreated.team, options.team);
assert.strictEqual(supplierCreated.invoiceId, options.invoiceId);
    });
  });

  describe("#get", () => {
    it("should retrieve a supplier by ID", async () => {
      const retrieved = await thisService.findById(supplierCreated._id);
      assert.strictEqual(retrieved._id.toString(), supplierCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"suppliersName":"345345345345345345345","suppliersTin":"updated value","suppliersSstRegistrationNumber":"updated value","identifierType":"345345345345345345345","identifierNumber":"updated value","suppliersMsicCode":"updated value","suppliersTourismTaxRegistrationNumber":"updated value","suppliersBusinessActivityDescription":"updated value","suppliersEMail":"updated value","theFirstSuppliersContactNumber":"345345345345345345345","suppliersContactNumber":"updated value","countryName":"345345345345345345345","stateName":"345345345345345345345","cityName":"updated value","postalZone":"updated value","suppliersBankAccountNumber":100,"paymentTerms":"updated value","prePaymentAmount":100,"prePaymentDate":null,"prePaymentReferenceNumber":"updated value","team":"345345345345345345345","invoiceId":"345345345345345345345"};

    it("should update an existing supplier ", async () => {
      const supplierUpdated = await thisService.findByIdAndUpdate(
        supplierCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(supplierUpdated.suppliersName, options.suppliersName);
assert.strictEqual(supplierUpdated.suppliersTin, options.suppliersTin);
assert.strictEqual(supplierUpdated.suppliersSstRegistrationNumber, options.suppliersSstRegistrationNumber);
assert.strictEqual(supplierUpdated.identifierType, options.identifierType);
assert.strictEqual(supplierUpdated.identifierNumber, options.identifierNumber);
assert.strictEqual(supplierUpdated.suppliersMsicCode, options.suppliersMsicCode);
assert.strictEqual(supplierUpdated.suppliersTourismTaxRegistrationNumber, options.suppliersTourismTaxRegistrationNumber);
assert.strictEqual(supplierUpdated.suppliersBusinessActivityDescription, options.suppliersBusinessActivityDescription);
assert.strictEqual(supplierUpdated.suppliersEMail, options.suppliersEMail);
assert.strictEqual(supplierUpdated.theFirstSuppliersContactNumber, options.theFirstSuppliersContactNumber);
assert.strictEqual(supplierUpdated.suppliersContactNumber, options.suppliersContactNumber);
assert.strictEqual(supplierUpdated.countryName, options.countryName);
assert.strictEqual(supplierUpdated.stateName, options.stateName);
assert.strictEqual(supplierUpdated.cityName, options.cityName);
assert.strictEqual(supplierUpdated.postalZone, options.postalZone);
assert.strictEqual(supplierUpdated.suppliersBankAccountNumber, options.suppliersBankAccountNumber);
assert.strictEqual(supplierUpdated.paymentTerms, options.paymentTerms);
assert.strictEqual(supplierUpdated.prePaymentAmount, options.prePaymentAmount);
assert.strictEqual(supplierUpdated.prePaymentDate, options.prePaymentDate);
assert.strictEqual(supplierUpdated.prePaymentReferenceNumber, options.prePaymentReferenceNumber);
assert.strictEqual(supplierUpdated.team, options.team);
assert.strictEqual(supplierUpdated.invoiceId, options.invoiceId);
    });
  });

  describe("#delete", () => {
    it("should delete a supplier", async () => {
      const supplierDeleted = await thisService.remove(supplierCreated._id);
      assert.strictEqual(supplierDeleted._id.toString(), supplierCreated._id.toString());
    });
  });
});