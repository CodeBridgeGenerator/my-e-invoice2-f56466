const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("buyers service", () => {
  let thisService;
  let buyerCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("buyers");

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
    assert.ok(thisService, "Registered the service (buyers)");
  });

  describe("#create", () => {
    const options = {"buyersName":"aasdfasdfasdfadsfadfa","buyersTin":"new value","buyersSstRegistrationNumber":"new value","identifierType":"aasdfasdfasdfadsfadfa","businessRegistrationNumberIdentificationNumberPassportNumber":"new value","buyersEMail":"new value","buyersAddressCountryName":"aasdfasdfasdfadsfadfa","buyersAddressStateName":"aasdfasdfasdfadsfadfa","buyersAddressCityName":"new value","buyersAddressPostalZone":23,"theFirstBuyersContactNumber":"aasdfasdfasdfadsfadfa","buyersContactNumber":23,"invoiceCurrency":"aasdfasdfasdfadsfadfa","currencyExchangeRate":23,"frequencyOfBilling":"aasdfasdfasdfadsfadfa","billingPeriodStartDate":1770257326605,"billingPeriodEndDate":1770257326605,"paymentMode":"aasdfasdfasdfadsfadfa","team":"aasdfasdfasdfadsfadfa","invoiceId":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      buyerCreated = await thisService.create({...options, ...users});
    });

    it("should create a new buyer", () => {
      assert.strictEqual(buyerCreated.buyersName, options.buyersName);
assert.strictEqual(buyerCreated.buyersTin, options.buyersTin);
assert.strictEqual(buyerCreated.buyersSstRegistrationNumber, options.buyersSstRegistrationNumber);
assert.strictEqual(buyerCreated.identifierType, options.identifierType);
assert.strictEqual(buyerCreated.businessRegistrationNumberIdentificationNumberPassportNumber, options.businessRegistrationNumberIdentificationNumberPassportNumber);
assert.strictEqual(buyerCreated.buyersEMail, options.buyersEMail);
assert.strictEqual(buyerCreated.buyersAddressCountryName, options.buyersAddressCountryName);
assert.strictEqual(buyerCreated.buyersAddressStateName, options.buyersAddressStateName);
assert.strictEqual(buyerCreated.buyersAddressCityName, options.buyersAddressCityName);
assert.strictEqual(buyerCreated.buyersAddressPostalZone, options.buyersAddressPostalZone);
assert.strictEqual(buyerCreated.theFirstBuyersContactNumber, options.theFirstBuyersContactNumber);
assert.strictEqual(buyerCreated.buyersContactNumber, options.buyersContactNumber);
assert.strictEqual(buyerCreated.invoiceCurrency, options.invoiceCurrency);
assert.strictEqual(buyerCreated.currencyExchangeRate, options.currencyExchangeRate);
assert.strictEqual(buyerCreated.frequencyOfBilling, options.frequencyOfBilling);
assert.strictEqual(buyerCreated.billingPeriodStartDate, options.billingPeriodStartDate);
assert.strictEqual(buyerCreated.billingPeriodEndDate, options.billingPeriodEndDate);
assert.strictEqual(buyerCreated.paymentMode, options.paymentMode);
assert.strictEqual(buyerCreated.team, options.team);
assert.strictEqual(buyerCreated.invoiceId, options.invoiceId);
    });
  });

  describe("#get", () => {
    it("should retrieve a buyer by ID", async () => {
      const retrieved = await thisService.findById(buyerCreated._id);
      assert.strictEqual(retrieved._id.toString(), buyerCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"buyersName":"345345345345345345345","buyersTin":"updated value","buyersSstRegistrationNumber":"updated value","identifierType":"345345345345345345345","businessRegistrationNumberIdentificationNumberPassportNumber":"updated value","buyersEMail":"updated value","buyersAddressCountryName":"345345345345345345345","buyersAddressStateName":"345345345345345345345","buyersAddressCityName":"updated value","buyersAddressPostalZone":100,"theFirstBuyersContactNumber":"345345345345345345345","buyersContactNumber":100,"invoiceCurrency":"345345345345345345345","currencyExchangeRate":100,"frequencyOfBilling":"345345345345345345345","billingPeriodStartDate":null,"billingPeriodEndDate":null,"paymentMode":"345345345345345345345","team":"345345345345345345345","invoiceId":"345345345345345345345"};

    it("should update an existing buyer ", async () => {
      const buyerUpdated = await thisService.findByIdAndUpdate(
        buyerCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(buyerUpdated.buyersName, options.buyersName);
assert.strictEqual(buyerUpdated.buyersTin, options.buyersTin);
assert.strictEqual(buyerUpdated.buyersSstRegistrationNumber, options.buyersSstRegistrationNumber);
assert.strictEqual(buyerUpdated.identifierType, options.identifierType);
assert.strictEqual(buyerUpdated.businessRegistrationNumberIdentificationNumberPassportNumber, options.businessRegistrationNumberIdentificationNumberPassportNumber);
assert.strictEqual(buyerUpdated.buyersEMail, options.buyersEMail);
assert.strictEqual(buyerUpdated.buyersAddressCountryName, options.buyersAddressCountryName);
assert.strictEqual(buyerUpdated.buyersAddressStateName, options.buyersAddressStateName);
assert.strictEqual(buyerUpdated.buyersAddressCityName, options.buyersAddressCityName);
assert.strictEqual(buyerUpdated.buyersAddressPostalZone, options.buyersAddressPostalZone);
assert.strictEqual(buyerUpdated.theFirstBuyersContactNumber, options.theFirstBuyersContactNumber);
assert.strictEqual(buyerUpdated.buyersContactNumber, options.buyersContactNumber);
assert.strictEqual(buyerUpdated.invoiceCurrency, options.invoiceCurrency);
assert.strictEqual(buyerUpdated.currencyExchangeRate, options.currencyExchangeRate);
assert.strictEqual(buyerUpdated.frequencyOfBilling, options.frequencyOfBilling);
assert.strictEqual(buyerUpdated.billingPeriodStartDate, options.billingPeriodStartDate);
assert.strictEqual(buyerUpdated.billingPeriodEndDate, options.billingPeriodEndDate);
assert.strictEqual(buyerUpdated.paymentMode, options.paymentMode);
assert.strictEqual(buyerUpdated.team, options.team);
assert.strictEqual(buyerUpdated.invoiceId, options.invoiceId);
    });
  });

  describe("#delete", () => {
    it("should delete a buyer", async () => {
      const buyerDeleted = await thisService.remove(buyerCreated._id);
      assert.strictEqual(buyerDeleted._id.toString(), buyerCreated._id.toString());
    });
  });
});