const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("taxTypes service", () => {
  let thisService;
  let taxTypeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("taxTypes");

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
    assert.ok(thisService, "Registered the service (taxTypes)");
  });

  describe("#create", () => {
    const options = {"taxType":"new value"};

    beforeEach(async () => {
      taxTypeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new taxType", () => {
      assert.strictEqual(taxTypeCreated.taxType, options.taxType);
    });
  });

  describe("#get", () => {
    it("should retrieve a taxType by ID", async () => {
      const retrieved = await thisService.findById(taxTypeCreated._id);
      assert.strictEqual(retrieved._id.toString(), taxTypeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"taxType":"updated value"};

    it("should update an existing taxType ", async () => {
      const taxTypeUpdated = await thisService.findByIdAndUpdate(
        taxTypeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(taxTypeUpdated.taxType, options.taxType);
    });
  });

  describe("#delete", () => {
    it("should delete a taxType", async () => {
      const taxTypeDeleted = await thisService.remove(taxTypeCreated._id);
      assert.strictEqual(taxTypeDeleted._id.toString(), taxTypeCreated._id.toString());
    });
  });
});