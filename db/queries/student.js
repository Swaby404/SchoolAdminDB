import db from "#db/client";


export default async function createStudent(firstName, lastName, major, year) {
  // Implementation for creating a student
  const sql = `
    INSERT INTO students
      (first_name, last_name, major, year)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [firstName, lastName, major, year];
  const {
    rows: [student],
  } = await db.query(sql, values);
  return student;
}






