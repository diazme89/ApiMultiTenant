import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_comp_numeroAttributes {
  id: number;
  fecha?: Date;
  punto_de_venta?: number;
  numero?: number;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  cod_empresa?: number;
  idproc?: number;
}

export type tt_comp_numeroPk = "id";
export type tt_comp_numeroId = tt_comp_numero[tt_comp_numeroPk];
export type tt_comp_numeroCreationAttributes = Optional<tt_comp_numeroAttributes, tt_comp_numeroPk>;

export class tt_comp_numero extends Model<tt_comp_numeroAttributes, tt_comp_numeroCreationAttributes> implements tt_comp_numeroAttributes {
  id!: number;
  fecha?: Date;
  punto_de_venta?: number;
  numero?: number;
  tipo_comprobante?: string;
  tipo_factura?: string;
  tag?: string;
  cod_empresa?: number;
  idproc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_comp_numero {
    tt_comp_numero.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tipo_factura: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_comp_numero',
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
      {
        name: "comp_numero_idx",
        using: "BTREE",
        fields: [
          { name: "cod_empresa" },
          { name: "tag" },
          { name: "tipo_comprobante" },
          { name: "punto_de_venta" },
          { name: "numero" },
        ]
      },
    ]
  });
  return tt_comp_numero;
  }
}
