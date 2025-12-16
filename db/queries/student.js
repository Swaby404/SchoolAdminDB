import db from "#db/client";


export default async function createStudent(firstName, lastName, major, year) {
  // Implementation for creating a student in the database
  //try catch!
  const sql = `
    INSERT INTO students
      (first_name, last_name, major, year)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
`;
const values = [firstName, lastName, major, year];
try {
  const {
    rows: [student],
  } = await db.query(sql, values);
  return student;
} catch (error) {
  console.error("Error creating student:", error);
  throw error;
}
}






