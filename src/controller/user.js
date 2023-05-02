import {getconection} from '../app.js'
import sql from "mssql";

export const listuser = async (req, res) => {
    const conect = await getconection();
    const result = await conect
      .query("SELECT * FROM [PRUEBAS].[dbo].[usuario]");
    res.json({
      message: 'lista de usuario',
    data: result.recordset});
  };
  
export  const newaruser = async (req, res) => {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const edad = req.body.edad
  
    const conect = await getconection();
    const result = await conect.request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("edad", sql.Int, edad)
      .query(
        "INSERT INTO [PRUEBAS].[dbo].[usuario] (nombre, apellido, edad) VALUES (@nombre,@apellido,@edad)"
      );
    res.json({
      message: "Usuario creado",
      data: result,
    });
  };
  
  
export const deleteuser = async (req,res) => {
    const id = req.body.id
  
    const conect = await getconection()
    await conect.request().input("id", sql.Int, id)
    .query("DELETE FROM [PRUEBAS].[dbo].[usuario] WHERE id = @id ")
    res.json({
      message: `Se elimino al usuario del id: ${id}` 
    })
  }
  
export const updateuser = async (req,res) => {
    const {id,nombre,apellido,edad} = req.body
  
    const conect = await getconection()
    const result = await conect.request().input("id", sql.Int, id).input("nombre", sql.VarChar, nombre).input("apellido", sql.VarChar, apellido).input("edad", sql.Int, edad)
    .query("UPDATE [PRUEBAS].[dbo].[usuario] SET nombre = @nombre, apellido = @apellido, edad = @edad WHERE id = @id ")
    res.json({
      message: `Se actualizo al usuario del id: ${id}`,
      data: result
    })
  }
  