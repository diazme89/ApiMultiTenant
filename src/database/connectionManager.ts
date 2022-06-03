import { Sequelize } from "sequelize";
import { getNamespace } from 'continuation-local-storage';
import { dbSynCentral } from './commonDBConnection'; 

import { QueryTypes } from 'sequelize';
import { initModels } from '../models/models/init-models';

let connectionMap:any; 

/**
 * Aqui crearemos utilidades que nos ayudarán a conectarnos a nuestras bases de datos de inquilinos y resolver la conexión
 * Aqui encontraremos una funcion para conectarnos a todas nuestras bases de datos de inquilinos y resolver la conexion 
 * y una funcion que nos devolvera una conexion de la connectionMap creada anteriormente
 * de esta manera tendremos nuestro administrados de conexion
 **/

/**
 * Creamos una instancia de sequelize para todos los inquilinos definidos en la tabla tenants de la base de datos compartida,
 * y las guardamos en un map 
 * Esta funcion se llama desde el modelo Server
 **/
 export async function connectAllDb() {
  let tenants;

  try {
    tenants = await dbSynCentral.query('SELECT * FROM tenants', { type: QueryTypes.SELECT, raw: true });
  } catch (e) {
    console.log('error', e);

    return;
  }

  connectionMap = tenants
    .map((tenant: any) => {
      const config:any = createConnectionConfig(tenant);
      return {
        [tenant.slug]: new Sequelize(config.database, config.username, config.passsword, {  host: config.option.host,
                                                                                            dialect: config.option.dialect,
                                                                                          })
      };
    })
    .reduce((prev, next) => {
      return Object.assign({}, prev, next);
    }, {});
}



/**
 *  Creamos un objeto de configuracion para el tenant dado
 **/
const createConnectionConfig = (tenant: any) => {
  return { 
    database: tenant.db_name, 
    username: tenant.db_username, 
    passsword: tenant.db_password, 
    option:{
        host: tenant.db_host,
        dialect: 'mysql',
    }
  };
}


/**
 * Obtenemos informacion de la conexion (instancia de sequelize) para el slug del tenant dado
 * Esta funcion se llama dese el Resolver para obtener la instacia de sequelize para el tenant solicitado
 */
export async function getConnectionBySlug(slug:any) {
  if (connectionMap) {
    console.log(`Obteniendo conexion para ${slug}`);
    await dbConnectionBySlug(connectionMap[slug]);
    return connectionMap[slug];
  }
}

// Esta funcion la estaba armando para asociar los modelos a la instancia de conexion del contexto actual
export const dbConnectionBySlug = async(conn:any) => {

  try {
      await conn.authenticate();
      initModels(conn);  
      console.log(`Se estableció la conexión a la Base de datos`);

  } catch (error) {
      console.log(error);
      throw new Error(`Error al inciar la base de datos`);
  }
}

/**
 * Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual.
 * Aqui hemos utilizado un getNamespace de 'continuation-local-storage'. Esto nos permite obtener
 * o establecer cualquier informacion y la vincula al contexto de solicitud actual.
 */
 export function getConnection() {
  const nameSpace = getNamespace('unique context');
  const conn:any = nameSpace?.get('connection');
  if (!conn) {
    throw 'La conexión no está configurada para ninguna base de datos de inquilinos.';
  }
  return conn;
}


