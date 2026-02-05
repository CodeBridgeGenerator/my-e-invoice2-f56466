
import { faker } from "@faker-js/faker";
export default (user,count,measurementIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
productName: faker.datatype.number(""),
quantity: faker.datatype.number(""),
unitPrice: faker.datatype.number(""),
measurement: measurementIds[i % measurementIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
