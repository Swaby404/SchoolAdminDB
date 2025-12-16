import db from "#db/client";
import bcrypt from "bcrypt";
///leaving password for practice purposes only. In production, avoid returning passwords.
export async function createUser(username, email, password) {
  const sql = `
  INSERT INTO users
    (username, email, password)
  VALUES
    ($1, $2, $3 )
  RETURNING *
  `;

  const hashedPassword = await bcrypt.hash(password, 10);
//remember to wrap db query with try catch to handle errors.
  const values = [username, email, hashedPassword];
  try {
    const {
      rows: [user],
    } = await db.query(sql, values);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}