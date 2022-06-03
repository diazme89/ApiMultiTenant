import { getConnection } from "../database/connectionManager";
import { Response, Request } from 'express';
import { QueryTypes } from 'sequelize';
import { usuarios } from '../models/models/init-models';

/**
 * No necesitamos que los servicios sepan que conexion estamos usando gracias 
 * al tipo de abstraccion que armamos en el codigo
 **/

/**
 * Obtener todos los usuarios.
 **/
export const getUsuarios = async (req: Request, res: Response) => {

  // Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual
  const db:any =  getConnection();
  const usuariosList = await db.query('SELECT * FROM usuarios', { type: QueryTypes.SELECT, raw: true });

  res.json(usuariosList);
}

export const getUsuariosModel = async (req: Request, res: Response) => {

  // Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual
  await getConnection();

  const usuariosList = await usuarios.findAll();
  res.json(usuariosList);

}

