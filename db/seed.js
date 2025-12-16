import db from "#db/client";
import {createStudent} from "#db/queries/";
 import { faker } from "@faker-js/faker";


await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


async function seed() {
    for (let i = 0; i < 10; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = "password123";
        await createStudent(username, email, password);
    }

   
};
   