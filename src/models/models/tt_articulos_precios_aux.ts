import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_articulos_precios_auxAttributes {
  id: number;
  id_reg?: number;
  cod_articulo?: number;
  cod_fabricante?: string;
  descripcion?: string;
  precio_base?: number;
  coeficiente_compra?: number;
  precio_costo_neto?: number;
  precio_venta_neto?: number;
  coeficiente_venta?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_articulos_precios_auxPk = "id";
export type tt_articulos_precios_auxId = tt_articulos_precios_aux[tt_articulos_precios_auxPk];
export type tt_articulos_precios_auxCreationAttributes = Optional<tt_articulos_precios_auxAttributes, tt_articulos_precios_auxPk>;

export class tt_articulos_precios_aux extends Model<tt_articulos_precios_auxAttributes, tt_articulos_precios_auxCreationAttributes> implements tt_articulos_precios_auxAttributes {
  id!: number;
  id_reg?: number;
  cod_articulo?: number;
  cod_fabricante?: string;
  descripcion?: string;
  precio_base?: number;
  coeficiente_compra?: number;
  precio_costo_neto?: number;
  precio_venta_neto?: number;
  coeficiente_venta?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_articulos_precios_aux {
    tt_articulos_precios_aux.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_reg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_fabricante: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    precio_base: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    coeficiente_compra: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    precio_costo_neto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    precio_venta_neto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    coeficiente_venta: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    idproc: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_articulos_precios_aux',
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
        name: "tt_articulos_precios_aux_xkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_fabricante" },
        ]
      },
      {
        name: "tt_articulos_precios_aux_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_articulos_precios_aux;
  }
}
