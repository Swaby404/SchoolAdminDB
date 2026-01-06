import db from "#db/client";
import {createStudent} from "#db/queries/";
import {createUser} from "#db/queries/";
 import { faker } from "@faker-js/faker";


await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


async function seed() {
//create user that will be used to access student data
const users = await createUser("heartseeker@lo.ve", "password123");
//create student profile that displays student first, last name, major, year
for (let i = 0; i < 10; i++) {
    await createStudent(faker.name.firstName(), faker.name.lastName(), faker.helpers.arrayElement(['Computer Science', 'Biology', 'Business', 'Art', 'History']), faker.helpers.arrayElement(['Freshman', 'Sophomore', 'Junior', 'Senior']));


     


}}
   