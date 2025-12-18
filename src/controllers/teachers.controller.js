import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
const pathStudents = resolve("db", "students.json");
const pathTeachers = resolve("db", "teachers.json");

class Teachers {
  addTeacher = (req, res) => {
    try {
      const { fullname, age, email, phone, password } = req.body;
      if (
        !fullname?.trim() ||
        !email?.trim() ||
        !phone?.trim() ||
        !password?.trim() ||
        age === undefined ||
        age === null
      ) {
        return res.status(400).send("malumotlar yetarli emas");
      }
      let allData = JSON.parse(readFileSync(pathTeachers, "utf-8"));
      const testEmail = allData.some((el) => el.email === email.trim());
      if (testEmail) {
        return res.status(400).send("bu email band");
      }
      const newStudent = {
        id: allData.length ? allData[allData.length - 1]?.id + 1 : 1,
        fullname,
        age: +age,
        email,
        phone,
        password,
      };
      allData.push(newStudent);
      writeFileSync(pathTeachers, JSON.stringify(allData, null, 2));
      return res.status(201).json(newStudent);
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }
  };
  getAllTeacher(req, res) {
    try {
      const allData = JSON.parse(readFileSync(pathTeachers, "utf-8"));
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }
  }
  putTeacher(req, res) {
    try {
      const allData = JSON.parse(readFileSync(pathTeachers, "utf-8"));
      if (isNaN(id)) {
        return res.status(400).json({
          statusCode: 400,
          message: "id number emas",
        });
      }
      const id = +req.params.id;
      const studentIndex = allData.findIndex((el) => el?.id == +id);
      if (studentIndex != -1) {
        const newUser = { ...allData[studentIndex], ...req.body };
        allData[studentIndex] = newUser;
        writeFileSync(pathTeachers, JSON.stringify(allData, null, 2));
        return res.status(200).json({
          statusCode: 200,
          message: "succes",
          data: newUser,
        });
      }
      return res.status(404).json({
        statusCode: 404,
        message: "Teacher not found",
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }
  }
  deleteTeacher(req, res) {
    try {
      const allData = JSON.parse(readFileSync(pathTeachers, "utf-8"));
      if (isNaN(id)) {
        return res.status(400).json({
          statusCode: 400,
          message: "id number emas",
        });
      }
      const id = +req.params.id;
      const studentIndex = allData.findIndex((el) => el?.id == +id);
      if (studentIndex != -1) {
        allData.splice(studentIndex, 1);
        writeFileSync(pathTeachers, JSON.stringify(allData, null, 2));
        return res.status(200).json({
          statusCode: 200,
          message: "Teacher success deleted",
        });
      }
      return res.status(404).json({
        statusCode: 404,
        message: "Teacher not found",
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export default new Teachers()