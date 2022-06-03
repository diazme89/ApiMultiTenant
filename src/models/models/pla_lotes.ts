import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_lotesAttributes {
  id: number;
  numero?: number;
  id_pla_modelo?: number;
  nombre?: string;
  cod_actividad?: number;
  cod_lote?: number;
  cod_lote_actividad?: number;
  rendimiento?: number;
  precio?: number;
  gastos_comerciales?: number;
  cuota_amortizacion?: number;
  mano_obra?: number;
  cod_periodo?: number;
}

export type pla_lotesPk = "id";
export type pla_lotesId = pla_lotes[pla_lotesPk];
export type pla_lotesCreationAttributes = Optional<pla_lotesAttributes, pla_lotesPk>;

export class pla_lotes extends Model<pla_lotesAttributes, pla_lotesCreationAttributes> implements pla_lotesAttributes {
  id!: number;
  numero?: number;
  id_pla_modelo?: number;
  nombre?: string;
  cod_actividad?: number;
  cod_lote?: number;
  cod_lote_actividad?: number;
  rendimiento?: number;
  precio?: number;
  gastos_comerciales?: number;
  cuota_amortizacion?: number;
  mano_obra?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_lotes {
    pla_lotes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_pla_modelo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    rendimiento: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    gastos_comerciales: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cuota_amortizacion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    mano_obra: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_lotes',
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
        name: "pla_lotesxkey1",
        using: "BTREE",
        fields: [
          { name: "cod_periodo" },
          { name: "id_pla_modelo" },
        ]
      },
    ]
  });
  return pla_lotes;
  }
}
