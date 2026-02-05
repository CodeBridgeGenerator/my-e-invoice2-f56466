const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("frequencyOfBilling service", () => {
  let thisService;
  let frequencyOfBillingCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("frequencyOfBilling");

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
    assert.ok(thisService, "Registered the service (frequencyOfBilling)");
  });

  describe("#create", () => {
    const options = {"frequencyOfBilling":"new value"};

    beforeEach(async () => {
      frequencyOfBillingCreated = await thisService.create({...options, ...users});
    });

    it("should create a new frequencyOfBilling", () => {
      assert.strictEqual(frequencyOfBillingCreated.frequencyOfBilling, options.frequencyOfBilling);
    });
  });

  describe("#get", () => {
    it("should retrieve a frequencyOfBilling by ID", async () => {
      const retrieved = await thisService.findById(frequencyOfBillingCreated._id);
      assert.strictEqual(retrieved._id.toString(), frequencyOfBillingCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"frequencyOfBilling":"updated value"};

    it("should update an existing frequencyOfBilling ", async () => {
      const frequencyOfBillingUpdated = await thisService.findByIdAndUpdate(
        frequencyOfBillingCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(frequencyOfBillingUpdated.frequencyOfBilling, options.frequencyOfBilling);
    });
  });

  describe("#delete", () => {
    it("should delete a frequencyOfBilling", async () => {
      const frequencyOfBillingDeleted = await thisService.remove(frequencyOfBillingCreated._id);
      assert.strictEqual(frequencyOfBillingDeleted._id.toString(), frequencyOfBillingCreated._id.toString());
    });
  });
});