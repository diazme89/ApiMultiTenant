import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface identificador_campoAttributes {
  id: number;
  codigo: number;
  numero?: number;
  descripcion?: string;
}

export type identificador_campoPk = "id";
export type identificador_campoId = identificador_campo[identificador_campoPk];
export type identificador_campoCreationAttributes = Optional<identificador_campoAttributes, identificador_campoPk>;

export class identificador_campo extends Model<identificador_campoAttributes, identificador_campoCreationAttributes> implements identificador_campoAttributes {
  id!: number;
  codigo!: number;
  numero?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof identificador_campo {
    identificador_campo.init({
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
    tableName: 'identificador_campo',
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
  return identificador_campo;
  }
}
