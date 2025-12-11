import db from "#db/client";
import bcrypt from "bcrypt";

export async function createUser(username, email, password) {
  const sql = `
  INSERT INTO users
    (username, email, password)
  VALUES
    ($1, $2, $3 )
  RETURNING *
  `;

  const hashedPassword = await bcrypt.hash(password, 10);

  const values = [username, email, hashedPassword];
  const {
    rows: [user],
  } = await db.query(sql, values);
  return user;
}