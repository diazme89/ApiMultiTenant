import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface promociones_planAttributes {
  id: number;
  id_promocion?: number;
  cod_articulo?: number;
  porc_descuento?: number;
  cant_articulo?: number;
  cant_articulo_aplica?: number;
  dia_lunes?: number;
  dia_martes?: number;
  dia_miercoles?: number;
  dia_jueves?: number;
  dia_viernes?: number;
  dia_sabado?: number;
  dia_domingo?: number;
  cant_minima?: number;
  cant_maxima?: number;
  precio_lp?: number;
  precio_neto?: number;
}

export type promociones_planPk = "id";
export type promociones_planId = promociones_plan[promociones_planPk];
export type promociones_planCreationAttributes = Optional<promociones_planAttributes, promociones_planPk>;

export class promociones_plan extends Model<promociones_planAttributes, promociones_planCreationAttributes> implements promociones_planAttributes {
  id!: number;
  id_promocion?: number;
  cod_articulo?: number;
  porc_descuento?: number;
  cant_articulo?: number;
  cant_articulo_aplica?: number;
  dia_lunes?: number;
  dia_martes?: number;
  dia_miercoles?: number;
  dia_jueves?: number;
  dia_viernes?: number;
  dia_sabado?: number;
  dia_domingo?: number;
  cant_minima?: number;
  cant_maxima?: number;
  precio_lp?: number;
  precio_neto?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof promociones_plan {
    promociones_plan.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_promocion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porc_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cant_articulo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cant_articulo_aplica: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dia_lunes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_martes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_miercoles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_jueves: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_viernes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_sabado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dia_domingo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cant_minima: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cant_maxima: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    precio_lp: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    precio_neto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promociones_plan',
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
  return promociones_plan;
  }
}
