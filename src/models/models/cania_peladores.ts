import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cania_peladoresAttributes {
  id: number;
  id_produccion?: number;
  cod_empleado?: number;
  cantidad?: number;
  tarea_nro?: number;
}

export type cania_peladoresPk = "id";
export type cania_peladoresId = cania_peladores[cania_peladoresPk];
export type cania_peladoresCreationAttributes = Optional<cania_peladoresAttributes, cania_peladoresPk>;

export class cania_peladores extends Model<cania_peladoresAttributes, cania_peladoresCreationAttributes> implements cania_peladoresAttributes {
  id!: number;
  id_produccion?: number;
  cod_empleado?: number;
  cantidad?: number;
  tarea_nro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cania_peladores {
    cania_peladores.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_produccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empleado: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    tarea_nro: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cania_peladores',
    timestamps: false
  });
  return cania_peladores;
  }
}
