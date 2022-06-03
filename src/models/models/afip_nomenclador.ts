import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_nomencladorAttributes {
  id: number;
  codigo?: string;
  um?: string;
  descripcion?: string;
}

export type afip_nomencladorPk = "id";
export type afip_nomencladorId = afip_nomenclador[afip_nomencladorPk];
export type afip_nomencladorCreationAttributes = Optional<afip_nomencladorAttributes, afip_nomencladorPk>;

export class afip_nomenclador extends Model<afip_nomencladorAttributes, afip_nomencladorCreationAttributes> implements afip_nomencladorAttributes {
  id!: number;
  codigo?: string;
  um?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_nomenclador {
    afip_nomenclador.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    um: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_nomenclador',
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
  return afip_nomenclador;
  }
}
