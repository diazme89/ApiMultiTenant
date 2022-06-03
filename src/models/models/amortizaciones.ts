import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface amortizacionesAttributes {
  id: number;
  detalle?: string;
  anio?: number;
  vida_util?: number;
  v_r?: number;
  valor_inicio?: number;
  valor_cierre?: number;
  cuota_amortizacion?: number;
  empresa?: number;
  valor_a_nuevo?: number;
  tipo?: string;
  cod_maquina?: number;
  cod_actividad?: number;
}

export type amortizacionesPk = "id";
export type amortizacionesId = amortizaciones[amortizacionesPk];
export type amortizacionesCreationAttributes = Optional<amortizacionesAttributes, amortizacionesPk>;

export class amortizaciones extends Model<amortizacionesAttributes, amortizacionesCreationAttributes> implements amortizacionesAttributes {
  id!: number;
  detalle?: string;
  anio?: number;
  vida_util?: number;
  v_r?: number;
  valor_inicio?: number;
  valor_cierre?: number;
  cuota_amortizacion?: number;
  empresa?: number;
  valor_a_nuevo?: number;
  tipo?: string;
  cod_maquina?: number;
  cod_actividad?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof amortizaciones {
    amortizaciones.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    detalle: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    vida_util: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    v_r: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    valor_inicio: {
      type: DataTypes.DECIMAL(8,1),
      allowNull: true
    },
    valor_cierre: {
      type: DataTypes.DECIMAL(8,1),
      allowNull: true
    },
    cuota_amortizacion: {
      type: DataTypes.DECIMAL(8,1),
      allowNull: true
    },
    empresa: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    valor_a_nuevo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'amortizaciones',
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
  return amortizaciones;
  }
}
