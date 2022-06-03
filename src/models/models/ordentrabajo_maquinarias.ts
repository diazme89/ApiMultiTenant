import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordentrabajo_maquinariasAttributes {
  id: number;
  id_ordentrabajo: number;
  cod_empresa?: number;
  cod_maquina?: number;
  horas_maquina?: number;
  id_mantenimiento?: number;
}

export type ordentrabajo_maquinariasPk = "id";
export type ordentrabajo_maquinariasId = ordentrabajo_maquinarias[ordentrabajo_maquinariasPk];
export type ordentrabajo_maquinariasCreationAttributes = Optional<ordentrabajo_maquinariasAttributes, ordentrabajo_maquinariasPk>;

export class ordentrabajo_maquinarias extends Model<ordentrabajo_maquinariasAttributes, ordentrabajo_maquinariasCreationAttributes> implements ordentrabajo_maquinariasAttributes {
  id!: number;
  id_ordentrabajo!: number;
  cod_empresa?: number;
  cod_maquina?: number;
  horas_maquina?: number;
  id_mantenimiento?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ordentrabajo_maquinarias {
    ordentrabajo_maquinarias.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_ordentrabajo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    horas_maquina: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    id_mantenimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordentrabajo_maquinarias',
    timestamps: false
  });
  return ordentrabajo_maquinarias;
  }
}
