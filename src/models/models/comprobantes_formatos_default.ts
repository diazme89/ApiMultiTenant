import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comprobantes_formatos_defaultAttributes {
  id?: number;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  formato?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
}

export type comprobantes_formatos_defaultPk = "id";
export type comprobantes_formatos_defaultId = comprobantes_formatos_default[comprobantes_formatos_defaultPk];
export type comprobantes_formatos_defaultCreationAttributes = Optional<comprobantes_formatos_defaultAttributes, comprobantes_formatos_defaultPk>;

export class comprobantes_formatos_default extends Model<comprobantes_formatos_defaultAttributes, comprobantes_formatos_defaultCreationAttributes> implements comprobantes_formatos_defaultAttributes {
  id?: number;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  formato?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof comprobantes_formatos_default {
    comprobantes_formatos_default.init({
    id: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    tipo_comprobante: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    tipo_factura: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    formato: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comprobantes_formatos_default',
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
  return comprobantes_formatos_default;
  }
}
