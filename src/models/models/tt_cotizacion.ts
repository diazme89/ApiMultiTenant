import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cotizacionAttributes {
  id: number;
  fecha?: string;
  indice?: number;
  idproc?: number;
  fecha_alta?: Date;
  indice_compra?: number;
  indice_venta?: number;
}

export type tt_cotizacionPk = "id";
export type tt_cotizacionId = tt_cotizacion[tt_cotizacionPk];
export type tt_cotizacionCreationAttributes = Optional<tt_cotizacionAttributes, tt_cotizacionPk>;

export class tt_cotizacion extends Model<tt_cotizacionAttributes, tt_cotizacionCreationAttributes> implements tt_cotizacionAttributes {
  id!: number;
  fecha?: string;
  indice?: number;
  idproc?: number;
  fecha_alta?: Date;
  indice_compra?: number;
  indice_venta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cotizacion {
    tt_cotizacion.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    indice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    indice_compra: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    indice_venta: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cotizacion',
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
        name: "tt_cotizacion_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
      {
        name: "tt_cotizacion_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
      {
        name: "tt_cotizacion_idproc_fecha",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "fecha" },
        ]
      },
    ]
  });
  return tt_cotizacion;
  }
}
