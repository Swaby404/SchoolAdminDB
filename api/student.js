import express from "express";
const router = express.Router();
export default router;
import { createStudent, getStudent  } from "#db/queries/student";
 
router
.route("/").get(async (req, res) => {
  try {
    const students = await getStudent();
    res.send(students);
  } catch (err) {
    res.status(500).send("Server error.");
  }
});
router.route("/:id").get(async (req, res) => {
  try {
    const student = await createStudent(req.params.id);
    if (!student) return res.status(404).send("Student not found.");
    res.send(student);
  } catch (err) {
    res.status(500).send("Server error.");
  }
});