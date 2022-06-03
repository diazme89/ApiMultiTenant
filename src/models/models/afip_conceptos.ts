import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_conceptosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_conceptosPk = "id";
export type afip_conceptosId = afip_conceptos[afip_conceptosPk];
export type afip_conceptosCreationAttributes = Optional<afip_conceptosAttributes, afip_conceptosPk>;

export class afip_conceptos extends Model<afip_conceptosAttributes, afip_conceptosCreationAttributes> implements afip_conceptosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_conceptos {
    afip_conceptos.init({
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
    tableName: 'afip_conceptos',
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
  return afip_conceptos;
  }
}
