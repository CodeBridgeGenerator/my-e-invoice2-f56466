
    module.exports = function (app) {
        const modelName = "products";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            productName: { type:  String , required: true, unique: true, minLength: 2, maxLength: 1000, index: true, comment: "Product name, p, false, true, true, true, true, true, true, , , , ," },
quantity: { type: Number, max: 1000000, comment: "Quantity, p_number, false, true, true, true, true, true, true, , , , ," },
unitPrice: { type: Number, max: 1000000, comment: "Unit Price, p_number, false, true, true, true, true, true, true, , , , ," },
measurement: { type: Schema.Types.ObjectId, ref: "measurements", comment: "Measurement, dropdown, false, true, true, true, true, true, true, measurements, measurements, one-to-one, measurement," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };