import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rodeoAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type rodeoPk = "id";
export type rodeoId = rodeo[rodeoPk];
export type rodeoCreationAttributes = Optional<rodeoAttributes, rodeoPk>;

export class rodeo extends Model<rodeoAttributes, rodeoCreationAttributes> implements rodeoAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof rodeo {
    rodeo.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rodeo',
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
  return rodeo;
  }
}
