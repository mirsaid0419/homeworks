import connect_db from "../db/connect_user_database.js";
async function addUser(req, res,tb_name) {
  const pool = await connect_db();
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "malumotlar yetarli emas",
      });
    }
    const str=Object.keys(req.body).join(", ")
    const str1=Object.values(req.body).map((_,index)=>`$${index+1}`).join(", ")
    const values=Object.values(req.body)
    await pool.query(`insert into ${tb_name}(${str}) values(${str1})`,values)
    // console.log(str)
    // const { name, age } = req.body;
    // await pool.query("insert into users(name,age) values($1,$2)", [name, age]);
    return res.status(201).json({
      status: 201,
      message: `${tb_name} succes created`,
    });
  } catch (error) {
    return res.status(500).json({
      message: `error ${tb_name} creating ${error.message}`,
    });
  }
}

async function updateUser(req, res, tb_name) {
  try {
    const pool = await connect_db();
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "invalid id",
      });
    }
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "o'zgarish mavjud emas",
      });
    }
    const str = Object.keys(req.body)
      .map((el, index) => `${el}=$${index + 1}`)
      .join(", ");
    const { rows } = await pool.query(
      `update ${tb_name} set ${str} where id=$${
        Object.keys(req.body).length + 1
      } returning *`,
      [...Object.values(req.body), id]
    );
    return res.status(201).json({
      status: 201,
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({
      message: `error ${tb_name} creating :${error.message}`,
    });
  }
}
async function getAllUsers(req, res,tb_name) {
  try {
    const pool = await connect_db();
    const { rows } = await pool.query(`select * from ${tb_name}`);
    return res.status(200).json({
      status: 200,
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({
      message: `error ${tb_name} creating :${error.message}`,
    });
  }
}
async function getUserById(req,res,tb_name) {
  try {
    const pool = await connect_db();
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "invalid id",
      });
    }
    const {rows}=await pool.query(`select * from ${tb_name} where id=$1`,[id])
    return res.status(200).json({
      status:200,
      user:rows[0]
    })
  } catch (error) {
    return res.status(500).json({
      message: `error ${tb_name} creating :${error.message}`,
    });
  }
}
async function deleteUser(req,res,tb_name) {
  try {
    const pool = await connect_db();
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "invalid id",
      });
    }
    const { rows } = await pool.query(`delete from ${tb_name} where id=$1`, [id]);
    return res.status(200).json({
      status: 200,
      message:`${tb_name} success deleted`
    });
  } catch (error) {
    return res.status(500).json({
      message: `error ${tb_name} creating :${error.message}`,
    });
  }
}
export { addUser, updateUser, getAllUsers, getUserById,deleteUser };
