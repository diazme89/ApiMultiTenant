import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_paisesAttributes {
  id: number;
  codigo?: number;
  codigo_cuit?: number;
  descripcion?: string;
}

export type afip_paisesPk = "id";
export type afip_paisesId = afip_paises[afip_paisesPk];
export type afip_paisesCreationAttributes = Optional<afip_paisesAttributes, afip_paisesPk>;

export class afip_paises extends Model<afip_paisesAttributes, afip_paisesCreationAttributes> implements afip_paisesAttributes {
  id!: number;
  codigo?: number;
  codigo_cuit?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_paises {
    afip_paises.init({
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
    codigo_cuit: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_paises',
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
  return afip_paises;
  }
}
