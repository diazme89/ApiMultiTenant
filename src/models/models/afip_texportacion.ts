import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_texportacionAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type afip_texportacionPk = "id";
export type afip_texportacionId = afip_texportacion[afip_texportacionPk];
export type afip_texportacionCreationAttributes = Optional<afip_texportacionAttributes, afip_texportacionPk>;

export class afip_texportacion extends Model<afip_texportacionAttributes, afip_texportacionCreationAttributes> implements afip_texportacionAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_texportacion {
    afip_texportacion.init({
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
    }
  }, {
    sequelize,
    tableName: 'afip_texportacion',
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
  return afip_texportacion;
  }
}
