import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_ventas_produccionAttributes {
  id: number;
  cod_actividad?: number;
  cod_periodo?: number;
}

export type pla_ventas_produccionPk = "id";
export type pla_ventas_produccionId = pla_ventas_produccion[pla_ventas_produccionPk];
export type pla_ventas_produccionCreationAttributes = Optional<pla_ventas_produccionAttributes, pla_ventas_produccionPk>;

export class pla_ventas_produccion extends Model<pla_ventas_produccionAttributes, pla_ventas_produccionCreationAttributes> implements pla_ventas_produccionAttributes {
  id!: number;
  cod_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_ventas_produccion {
    pla_ventas_produccion.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_ventas_produccion',
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
  return pla_ventas_produccion;
  }
}
