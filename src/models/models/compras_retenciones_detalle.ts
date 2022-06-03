import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_retenciones_detalleAttributes {
  id: number;
  id_cab: number;
  id_comprobante: number;
  tipo?: string;
  importe?: number;
  generado?: string;
  numero_retorno?: string;
}

export type compras_retenciones_detallePk = "id";
export type compras_retenciones_detalleId = compras_retenciones_detalle[compras_retenciones_detallePk];
export type compras_retenciones_detalleCreationAttributes = Optional<compras_retenciones_detalleAttributes, compras_retenciones_detallePk>;

export class compras_retenciones_detalle extends Model<compras_retenciones_detalleAttributes, compras_retenciones_detalleCreationAttributes> implements compras_retenciones_detalleAttributes {
  id!: number;
  id_cab!: number;
  id_comprobante!: number;
  tipo?: string;
  importe?: number;
  generado?: string;
  numero_retorno?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_retenciones_detalle {
    compras_retenciones_detalle.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cab: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    generado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero_retorno: {
      type: DataTypes.CHAR(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_retenciones_detalle',
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
  return compras_retenciones_detalle;
  }
}
