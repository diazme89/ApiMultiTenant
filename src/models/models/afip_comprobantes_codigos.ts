import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface afip_comprobantes_codigosAttributes {
  id: number;
  tipo_comprobante: string;
  tipo_factura?: string;
  codigo?: number;
}

export type afip_comprobantes_codigosPk = "id";
export type afip_comprobantes_codigosId = afip_comprobantes_codigos[afip_comprobantes_codigosPk];
export type afip_comprobantes_codigosCreationAttributes = Optional<afip_comprobantes_codigosAttributes, afip_comprobantes_codigosPk>;

export class afip_comprobantes_codigos extends Model<afip_comprobantes_codigosAttributes, afip_comprobantes_codigosCreationAttributes> implements afip_comprobantes_codigosAttributes {
  id!: number;
  tipo_comprobante!: string;
  tipo_factura?: string;
  codigo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof afip_comprobantes_codigos {
    afip_comprobantes_codigos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    tipo_factura: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'afip_comprobantes_codigos',
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
  return afip_comprobantes_codigos;
  }
}
