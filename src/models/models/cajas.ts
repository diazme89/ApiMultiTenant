import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cajasAttributes {
  id: number;
  nro_caja?: number;
  nombre?: string;
  tipo?: string;
}

export type cajasPk = "id";
export type cajasId = cajas[cajasPk];
export type cajasCreationAttributes = Optional<cajasAttributes, cajasPk>;

export class cajas extends Model<cajasAttributes, cajasCreationAttributes> implements cajasAttributes {
  id!: number;
  nro_caja?: number;
  nombre?: string;
  tipo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cajas {
    cajas.init({
    id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    nro_caja: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cajas',
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
  return cajas;
  }
}
