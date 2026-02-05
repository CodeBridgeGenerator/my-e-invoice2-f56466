const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("identifyType service", () => {
  let thisService;
  let identifyTypeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("identifyType");

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
    assert.ok(thisService, "Registered the service (identifyType)");
  });

  describe("#create", () => {
    const options = {"identifyType":"new value"};

    beforeEach(async () => {
      identifyTypeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new identifyType", () => {
      assert.strictEqual(identifyTypeCreated.identifyType, options.identifyType);
    });
  });

  describe("#get", () => {
    it("should retrieve a identifyType by ID", async () => {
      const retrieved = await thisService.findById(identifyTypeCreated._id);
      assert.strictEqual(retrieved._id.toString(), identifyTypeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"identifyType":"updated value"};

    it("should update an existing identifyType ", async () => {
      const identifyTypeUpdated = await thisService.findByIdAndUpdate(
        identifyTypeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(identifyTypeUpdated.identifyType, options.identifyType);
    });
  });

  describe("#delete", () => {
    it("should delete a identifyType", async () => {
      const identifyTypeDeleted = await thisService.remove(identifyTypeCreated._id);
      assert.strictEqual(identifyTypeDeleted._id.toString(), identifyTypeCreated._id.toString());
    });
  });
});