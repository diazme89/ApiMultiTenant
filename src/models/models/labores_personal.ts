import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface labores_personalAttributes {
  id: number;
  id_labores: number;
  cod_empleado?: number;
  cod_concepto?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
}

export type labores_personalPk = "id";
export type labores_personalId = labores_personal[labores_personalPk];
export type labores_personalCreationAttributes = Optional<labores_personalAttributes, labores_personalPk>;

export class labores_personal extends Model<labores_personalAttributes, labores_personalCreationAttributes> implements labores_personalAttributes {
  id!: number;
  id_labores!: number;
  cod_empleado?: number;
  cod_concepto?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores_personal {
    labores_personal.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_labores: {
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
      type: DataTypes.DECIMAL(9,4),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labores_personal',
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
  return labores_personal;
  }
}
