import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarios_depositosAttributes {
  id: number;
  id_usuario?: number;
  cod_deposito?: number;
  predeterminado?: string;
}

export type usuarios_depositosPk = "id";
export type usuarios_depositosId = usuarios_depositos[usuarios_depositosPk];
export type usuarios_depositosCreationAttributes = Optional<usuarios_depositosAttributes, usuarios_depositosPk>;

export class usuarios_depositos extends Model<usuarios_depositosAttributes, usuarios_depositosCreationAttributes> implements usuarios_depositosAttributes {
  id!: number;
  id_usuario?: number;
  cod_deposito?: number;
  predeterminado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios_depositos {
    usuarios_depositos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    predeterminado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios_depositos',
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
  return usuarios_depositos;
  }
}
