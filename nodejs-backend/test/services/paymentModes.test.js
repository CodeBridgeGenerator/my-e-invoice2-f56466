const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("paymentModes service", () => {
  let thisService;
  let paymentModeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("paymentModes");

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
    assert.ok(thisService, "Registered the service (paymentModes)");
  });

  describe("#create", () => {
    const options = {"paymentMode":"new value"};

    beforeEach(async () => {
      paymentModeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new paymentMode", () => {
      assert.strictEqual(paymentModeCreated.paymentMode, options.paymentMode);
    });
  });

  describe("#get", () => {
    it("should retrieve a paymentMode by ID", async () => {
      const retrieved = await thisService.findById(paymentModeCreated._id);
      assert.strictEqual(retrieved._id.toString(), paymentModeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"paymentMode":"updated value"};

    it("should update an existing paymentMode ", async () => {
      const paymentModeUpdated = await thisService.findByIdAndUpdate(
        paymentModeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(paymentModeUpdated.paymentMode, options.paymentMode);
    });
  });

  describe("#delete", () => {
    it("should delete a paymentMode", async () => {
      const paymentModeDeleted = await thisService.remove(paymentModeCreated._id);
      assert.strictEqual(paymentModeDeleted._id.toString(), paymentModeCreated._id.toString());
    });
  });
});