import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_comprobantesAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;
}

export type afip_comprobantesPk = "id";
export type afip_comprobantesId = afip_comprobantes[afip_comprobantesPk];
export type afip_comprobantesCreationAttributes = Optional<afip_comprobantesAttributes, afip_comprobantesPk>;

export class afip_comprobantes extends Model<afip_comprobantesAttributes, afip_comprobantesCreationAttributes> implements afip_comprobantesAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fechadesde?: string;
  fechahasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_comprobantes {
    afip_comprobantes.init({
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
    tableName: 'afip_comprobantes',
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
  return afip_comprobantes;
  }
}
