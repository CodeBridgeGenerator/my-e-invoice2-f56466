const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("measurements service", () => {
  let thisService;
  let measurementCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("measurements");

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
    assert.ok(thisService, "Registered the service (measurements)");
  });

  describe("#create", () => {
    const options = {"measurement":"new value"};

    beforeEach(async () => {
      measurementCreated = await thisService.create({...options, ...users});
    });

    it("should create a new measurement", () => {
      assert.strictEqual(measurementCreated.measurement, options.measurement);
    });
  });

  describe("#get", () => {
    it("should retrieve a measurement by ID", async () => {
      const retrieved = await thisService.findById(measurementCreated._id);
      assert.strictEqual(retrieved._id.toString(), measurementCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"measurement":"updated value"};

    it("should update an existing measurement ", async () => {
      const measurementUpdated = await thisService.findByIdAndUpdate(
        measurementCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(measurementUpdated.measurement, options.measurement);
    });
  });

  describe("#delete", () => {
    it("should delete a measurement", async () => {
      const measurementDeleted = await thisService.remove(measurementCreated._id);
      assert.strictEqual(measurementDeleted._id.toString(), measurementCreated._id.toString());
    });
  });
});