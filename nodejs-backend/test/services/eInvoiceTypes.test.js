const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("eInvoiceTypes service", () => {
  let thisService;
  let eInvoiceTypeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("eInvoiceTypes");

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
    assert.ok(thisService, "Registered the service (eInvoiceTypes)");
  });

  describe("#create", () => {
    const options = {"eInvoiceTypes":"new value"};

    beforeEach(async () => {
      eInvoiceTypeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new eInvoiceType", () => {
      assert.strictEqual(eInvoiceTypeCreated.eInvoiceTypes, options.eInvoiceTypes);
    });
  });

  describe("#get", () => {
    it("should retrieve a eInvoiceType by ID", async () => {
      const retrieved = await thisService.findById(eInvoiceTypeCreated._id);
      assert.strictEqual(retrieved._id.toString(), eInvoiceTypeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"eInvoiceTypes":"updated value"};

    it("should update an existing eInvoiceType ", async () => {
      const eInvoiceTypeUpdated = await thisService.findByIdAndUpdate(
        eInvoiceTypeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(eInvoiceTypeUpdated.eInvoiceTypes, options.eInvoiceTypes);
    });
  });

  describe("#delete", () => {
    it("should delete a eInvoiceType", async () => {
      const eInvoiceTypeDeleted = await thisService.remove(eInvoiceTypeCreated._id);
      assert.strictEqual(eInvoiceTypeDeleted._id.toString(), eInvoiceTypeCreated._id.toString());
    });
  });
});