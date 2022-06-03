import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_puntos_ventasAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_puntos_ventasPk = "id";
export type afip_puntos_ventasId = afip_puntos_ventas[afip_puntos_ventasPk];
export type afip_puntos_ventasCreationAttributes = Optional<afip_puntos_ventasAttributes, afip_puntos_ventasPk>;

export class afip_puntos_ventas extends Model<afip_puntos_ventasAttributes, afip_puntos_ventasCreationAttributes> implements afip_puntos_ventasAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_puntos_ventas {
    afip_puntos_ventas.init({
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
    tableName: 'afip_puntos_ventas',
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
  return afip_puntos_ventas;
  }
}
