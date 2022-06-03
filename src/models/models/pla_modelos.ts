import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_modelosAttributes {
  id: number;
  numero?: number;
  nombre?: string;
  cod_actividad?: number;
  rendimiento?: number;
  precio?: number;
  gastos_comerciales?: number;
  cuota_amortizacion?: number;
  mano_obra?: number;
  cod_periodo?: number;
}

export type pla_modelosPk = "id";
export type pla_modelosId = pla_modelos[pla_modelosPk];
export type pla_modelosCreationAttributes = Optional<pla_modelosAttributes, pla_modelosPk>;

export class pla_modelos extends Model<pla_modelosAttributes, pla_modelosCreationAttributes> implements pla_modelosAttributes {
  id!: number;
  numero?: number;
  nombre?: string;
  cod_actividad?: number;
  rendimiento?: number;
  precio?: number;
  gastos_comerciales?: number;
  cuota_amortizacion?: number;
  mano_obra?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_modelos {
    pla_modelos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cod_actividad: {
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
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_modelos',
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
  return pla_modelos;
  }
}
