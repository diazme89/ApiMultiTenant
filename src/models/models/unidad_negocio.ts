import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface unidad_negocioAttributes {
  id: number;
  cod_unidad_negocio: number;
  nombre?: string;
  fecha_vigente?: string;
}

export type unidad_negocioPk = "id";
export type unidad_negocioId = unidad_negocio[unidad_negocioPk];
export type unidad_negocioCreationAttributes = Optional<unidad_negocioAttributes, unidad_negocioPk>;

export class unidad_negocio extends Model<unidad_negocioAttributes, unidad_negocioCreationAttributes> implements unidad_negocioAttributes {
  id!: number;
  cod_unidad_negocio!: number;
  nombre?: string;
  fecha_vigente?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof unidad_negocio {
    unidad_negocio.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    fecha_vigente: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad_negocio',
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
      {
        name: "unidad_negocioxcodigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_unidad_negocio" },
        ]
      },
    ]
  });
  return unidad_negocio;
  }
}
