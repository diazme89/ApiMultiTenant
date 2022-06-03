import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

export default dotenv.config(); 

export const config: any = { 
                            database: process.env.DB_DATABASE || '', 
                            username: process.env.DB_USER || '', 
                            passsword: process.env.DB_PASSWORD || '', 
                            option:{
                                host: process.env.DB_HOST || '',
                                dialect: 'mysql',
                                // logging: false,
                            }
    };

export const dbSynCentral = new Sequelize(config.database, config.username, config.passsword, {
    host: config.option.host,
    dialect: config.option.dialect,
    // logging: false,
});

export const dbConnectionSynCentral = async() => {

    try {
        await dbSynCentral.authenticate();
        //initModelsSynCentral(dbSynCentral);  
        console.log('Se estableció la conexión a la Base de datos Syn Central.');
  
    } catch (error) {
        console.log(error);
        throw new Error('Error al inciar la base de datos Syn Central.');
    }
  }