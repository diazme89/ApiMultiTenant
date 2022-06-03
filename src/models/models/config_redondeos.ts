import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_redondeosAttributes {
  id: number;
  concepto?: string;
  monto_limite?: number;
  usa_negativo?: string;
  cod_cuenta?: number;
  activo?: string;
}

export type config_redondeosPk = "id";
export type config_redondeosId = config_redondeos[config_redondeosPk];
export type config_redondeosCreationAttributes = Optional<config_redondeosAttributes, config_redondeosPk>;

export class config_redondeos extends Model<config_redondeosAttributes, config_redondeosCreationAttributes> implements config_redondeosAttributes {
  id!: number;
  concepto?: string;
  monto_limite?: number;
  usa_negativo?: string;
  cod_cuenta?: number;
  activo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_redondeos {
    config_redondeos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    concepto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    monto_limite: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    usa_negativo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    activo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'config_redondeos',
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
  return config_redondeos;
  }
}
