import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tarea_conceptoAttributes {
  id: number;
  cod_concepto?: number;
  concepto?: string;
}

export type tarea_conceptoPk = "id";
export type tarea_conceptoId = tarea_concepto[tarea_conceptoPk];
export type tarea_conceptoCreationAttributes = Optional<tarea_conceptoAttributes, tarea_conceptoPk>;

export class tarea_concepto extends Model<tarea_conceptoAttributes, tarea_conceptoCreationAttributes> implements tarea_conceptoAttributes {
  id!: number;
  cod_concepto?: number;
  concepto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tarea_concepto {
    tarea_concepto.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_concepto: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    concepto: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarea_concepto',
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
  return tarea_concepto;
  }
}
