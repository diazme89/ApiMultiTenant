import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_tipos_tributosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_tipos_tributosPk = "id";
export type afip_tipos_tributosId = afip_tipos_tributos[afip_tipos_tributosPk];
export type afip_tipos_tributosCreationAttributes = Optional<afip_tipos_tributosAttributes, afip_tipos_tributosPk>;

export class afip_tipos_tributos extends Model<afip_tipos_tributosAttributes, afip_tipos_tributosCreationAttributes> implements afip_tipos_tributosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_tipos_tributos {
    afip_tipos_tributos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fechadesde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fechahasta: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_tipos_tributos',
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
  return afip_tipos_tributos;
  }
}
