import db from "#db/client";
import {   } from "#db/queries/";
import {   } from "#db/queries/";
import {   } from "#db/queries/";
import { faker } from "@faker-js/faker";


await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


async function seed() {
   
};
   