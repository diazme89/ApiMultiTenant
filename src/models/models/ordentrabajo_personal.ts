import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordentrabajo_personalAttributes {
  id: number;
  id_ordentrabajo: number;
  cod_empleado?: number;
  cod_concepto?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
}

export type ordentrabajo_personalPk = "id";
export type ordentrabajo_personalId = ordentrabajo_personal[ordentrabajo_personalPk];
export type ordentrabajo_personalCreationAttributes = Optional<ordentrabajo_personalAttributes, ordentrabajo_personalPk>;

export class ordentrabajo_personal extends Model<ordentrabajo_personalAttributes, ordentrabajo_personalCreationAttributes> implements ordentrabajo_personalAttributes {
  id!: number;
  id_ordentrabajo!: number;
  cod_empleado?: number;
  cod_concepto?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ordentrabajo_personal {
    ordentrabajo_personal.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_ordentrabajo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_empleado: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_concepto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordentrabajo_personal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return ordentrabajo_personal;
  }
}
