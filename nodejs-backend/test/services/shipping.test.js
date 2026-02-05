const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("shipping service", () => {
  let thisService;
  let shippingCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("shipping");

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
    assert.ok(thisService, "Registered the service (shipping)");
  });

  describe("#create", () => {
    const options = {"shippingRecipientsName":"aasdfasdfasdfadsfadfa","shippingRecipientsAddressCountryName":"aasdfasdfasdfadsfadfa","shippingRecipientsAddressStateName":"aasdfasdfasdfadsfadfa","shippingRecipientsAddressCityName":"new value","shippingRecipientsAddressPostalZone":23,"shippingRecipientsTin":"new value","shippingRecipientsIdentifierType":"aasdfasdfasdfadsfadfa","businessRegistrationNumberIdentificationNumberPassportNumber":"new value","billReferenceNumber":"new value","referenceNumberOfCustomsFormNo19Etc":"new value","incoterms":"new value","freeTradeAgreementFtaInformation":"new value","authorisationNumberForCertifiedExporter":"new value","referenceNumberOfCustomsFormNo2":"new value"};

    beforeEach(async () => {
      shippingCreated = await thisService.create({...options, ...users});
    });

    it("should create a new shipping", () => {
      assert.strictEqual(shippingCreated.shippingRecipientsName, options.shippingRecipientsName);
assert.strictEqual(shippingCreated.shippingRecipientsAddressCountryName, options.shippingRecipientsAddressCountryName);
assert.strictEqual(shippingCreated.shippingRecipientsAddressStateName, options.shippingRecipientsAddressStateName);
assert.strictEqual(shippingCreated.shippingRecipientsAddressCityName, options.shippingRecipientsAddressCityName);
assert.strictEqual(shippingCreated.shippingRecipientsAddressPostalZone, options.shippingRecipientsAddressPostalZone);
assert.strictEqual(shippingCreated.shippingRecipientsTin, options.shippingRecipientsTin);
assert.strictEqual(shippingCreated.shippingRecipientsIdentifierType, options.shippingRecipientsIdentifierType);
assert.strictEqual(shippingCreated.businessRegistrationNumberIdentificationNumberPassportNumber, options.businessRegistrationNumberIdentificationNumberPassportNumber);
assert.strictEqual(shippingCreated.billReferenceNumber, options.billReferenceNumber);
assert.strictEqual(shippingCreated.referenceNumberOfCustomsFormNo19Etc, options.referenceNumberOfCustomsFormNo19Etc);
assert.strictEqual(shippingCreated.incoterms, options.incoterms);
assert.strictEqual(shippingCreated.freeTradeAgreementFtaInformation, options.freeTradeAgreementFtaInformation);
assert.strictEqual(shippingCreated.authorisationNumberForCertifiedExporter, options.authorisationNumberForCertifiedExporter);
assert.strictEqual(shippingCreated.referenceNumberOfCustomsFormNo2, options.referenceNumberOfCustomsFormNo2);
    });
  });

  describe("#get", () => {
    it("should retrieve a shipping by ID", async () => {
      const retrieved = await thisService.findById(shippingCreated._id);
      assert.strictEqual(retrieved._id.toString(), shippingCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"shippingRecipientsName":"345345345345345345345","shippingRecipientsAddressCountryName":"345345345345345345345","shippingRecipientsAddressStateName":"345345345345345345345","shippingRecipientsAddressCityName":"updated value","shippingRecipientsAddressPostalZone":100,"shippingRecipientsTin":"updated value","shippingRecipientsIdentifierType":"345345345345345345345","businessRegistrationNumberIdentificationNumberPassportNumber":"updated value","billReferenceNumber":"updated value","referenceNumberOfCustomsFormNo19Etc":"updated value","incoterms":"updated value","freeTradeAgreementFtaInformation":"updated value","authorisationNumberForCertifiedExporter":"updated value","referenceNumberOfCustomsFormNo2":"updated value"};

    it("should update an existing shipping ", async () => {
      const shippingUpdated = await thisService.findByIdAndUpdate(
        shippingCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(shippingUpdated.shippingRecipientsName, options.shippingRecipientsName);
assert.strictEqual(shippingUpdated.shippingRecipientsAddressCountryName, options.shippingRecipientsAddressCountryName);
assert.strictEqual(shippingUpdated.shippingRecipientsAddressStateName, options.shippingRecipientsAddressStateName);
assert.strictEqual(shippingUpdated.shippingRecipientsAddressCityName, options.shippingRecipientsAddressCityName);
assert.strictEqual(shippingUpdated.shippingRecipientsAddressPostalZone, options.shippingRecipientsAddressPostalZone);
assert.strictEqual(shippingUpdated.shippingRecipientsTin, options.shippingRecipientsTin);
assert.strictEqual(shippingUpdated.shippingRecipientsIdentifierType, options.shippingRecipientsIdentifierType);
assert.strictEqual(shippingUpdated.businessRegistrationNumberIdentificationNumberPassportNumber, options.businessRegistrationNumberIdentificationNumberPassportNumber);
assert.strictEqual(shippingUpdated.billReferenceNumber, options.billReferenceNumber);
assert.strictEqual(shippingUpdated.referenceNumberOfCustomsFormNo19Etc, options.referenceNumberOfCustomsFormNo19Etc);
assert.strictEqual(shippingUpdated.incoterms, options.incoterms);
assert.strictEqual(shippingUpdated.freeTradeAgreementFtaInformation, options.freeTradeAgreementFtaInformation);
assert.strictEqual(shippingUpdated.authorisationNumberForCertifiedExporter, options.authorisationNumberForCertifiedExporter);
assert.strictEqual(shippingUpdated.referenceNumberOfCustomsFormNo2, options.referenceNumberOfCustomsFormNo2);
    });
  });

  describe("#delete", () => {
    it("should delete a shipping", async () => {
      const shippingDeleted = await thisService.remove(shippingCreated._id);
      assert.strictEqual(shippingDeleted._id.toString(), shippingCreated._id.toString());
    });
  });
});