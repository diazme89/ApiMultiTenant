import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_localidadesAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_provincia: number;
}

export type afip_localidadesPk = "id";
export type afip_localidadesId = afip_localidades[afip_localidadesPk];
export type afip_localidadesCreationAttributes = Optional<afip_localidadesAttributes, afip_localidadesPk>;

export class afip_localidades extends Model<afip_localidadesAttributes, afip_localidadesCreationAttributes> implements afip_localidadesAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_provincia!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_localidades {
    afip_localidades.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cod_provincia: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'afip_localidades',
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
        name: "afip_localidades_xkey1",
        using: "BTREE",
        fields: [
          { name: "cod_provincia" },
        ]
      },
    ]
  });
  return afip_localidades;
  }
}
