import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comprobantes_relacionAttributes {
  id: number;
  desc_comprobante: string;
  tipo_comprobante: string;
  tipo_factura: string;
  cod_afip?: number;
  circuito?: string;
}

export type comprobantes_relacionPk = "id";
export type comprobantes_relacionId = comprobantes_relacion[comprobantes_relacionPk];
export type comprobantes_relacionCreationAttributes = Optional<comprobantes_relacionAttributes, comprobantes_relacionPk>;

export class comprobantes_relacion extends Model<comprobantes_relacionAttributes, comprobantes_relacionCreationAttributes> implements comprobantes_relacionAttributes {
  id!: number;
  desc_comprobante!: string;
  tipo_comprobante!: string;
  tipo_factura!: string;
  cod_afip?: number;
  circuito?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof comprobantes_relacion {
    comprobantes_relacion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    desc_comprobante: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    tipo_factura: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    cod_afip: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "V"
    }
  }, {
    sequelize,
    tableName: 'comprobantes_relacion',
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
  return comprobantes_relacion;
  }
}
