import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cta_cble_grupoAttributes {
  id: number;
  codigo: number;
  descripcion: string;
  concepto?: string;
}

export type cta_cble_grupoPk = "id";
export type cta_cble_grupoId = cta_cble_grupo[cta_cble_grupoPk];
export type cta_cble_grupoCreationAttributes = Optional<cta_cble_grupoAttributes, cta_cble_grupoPk>;

export class cta_cble_grupo extends Model<cta_cble_grupoAttributes, cta_cble_grupoCreationAttributes> implements cta_cble_grupoAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;
  concepto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cta_cble_grupo {
    cta_cble_grupo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "i_cta_cble_grupo_codigo"
    },
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    concepto: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cta_cble_grupo',
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
        name: "i_cta_cble_grupo_codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return cta_cble_grupo;
  }
}
