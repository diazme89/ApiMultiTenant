import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comprobantes_formatosAttributes {
  id?: number;
  nombre_formato?: string;
  datawindow?: string;
  formato?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  servimanager?: string;
  circuito?: string;
}

export type comprobantes_formatosPk = "id";
export type comprobantes_formatosId = comprobantes_formatos[comprobantes_formatosPk];
export type comprobantes_formatosCreationAttributes = Optional<comprobantes_formatosAttributes, comprobantes_formatosPk>;

export class comprobantes_formatos extends Model<comprobantes_formatosAttributes, comprobantes_formatosCreationAttributes> implements comprobantes_formatosAttributes {
  id?: number;
  nombre_formato?: string;
  datawindow?: string;
  formato?: string;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  servimanager?: string;
  circuito?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof comprobantes_formatos {
    comprobantes_formatos.init({
    id: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    nombre_formato: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    datawindow: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    formato: {
      type: DataTypes.STRING(100),
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
    servimanager: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comprobantes_formatos',
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
  return comprobantes_formatos;
  }
}
