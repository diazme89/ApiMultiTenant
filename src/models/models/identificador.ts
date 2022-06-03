import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface identificadorAttributes {
  id: number;
  codigo: number;
  numero?: number;
  descripcion?: string;
}

export type identificadorPk = "id";
export type identificadorId = identificador[identificadorPk];
export type identificadorCreationAttributes = Optional<identificadorAttributes, identificadorPk>;

export class identificador extends Model<identificadorAttributes, identificadorCreationAttributes> implements identificadorAttributes {
  id!: number;
  codigo!: number;
  numero?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof identificador {
    identificador.init({
    id: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      unique: "Identificador_ak1"
    },
    numero: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'identificador',
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
        name: "Identificador_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Identificador_ak1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return identificador;
  }
}
