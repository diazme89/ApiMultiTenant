import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_monedasAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_monedasPk = "id";
export type afip_monedasId = afip_monedas[afip_monedasPk];
export type afip_monedasCreationAttributes = Optional<afip_monedasAttributes, afip_monedasPk>;

export class afip_monedas extends Model<afip_monedasAttributes, afip_monedasCreationAttributes> implements afip_monedasAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_monedas {
    afip_monedas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.CHAR(10),
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
    tableName: 'afip_monedas',
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
  return afip_monedas;
  }
}
