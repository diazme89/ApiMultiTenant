import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tarjetas_plan_empresasAttributes {
  id: number;
  cod_empresa?: number;
  id_tarjeta_plan?: number;
}

export type tarjetas_plan_empresasPk = "id";
export type tarjetas_plan_empresasId = tarjetas_plan_empresas[tarjetas_plan_empresasPk];
export type tarjetas_plan_empresasCreationAttributes = Optional<tarjetas_plan_empresasAttributes, tarjetas_plan_empresasPk>;

export class tarjetas_plan_empresas extends Model<tarjetas_plan_empresasAttributes, tarjetas_plan_empresasCreationAttributes> implements tarjetas_plan_empresasAttributes {
  id!: number;
  cod_empresa?: number;
  id_tarjeta_plan?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tarjetas_plan_empresas {
    tarjetas_plan_empresas.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    id_tarjeta_plan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tarjetas_plan_empresas',
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
        name: "tarjetas_plan_empresas_xkey1",
        using: "BTREE",
        fields: [
          { name: "id_tarjeta_plan" },
        ]
      },
    ]
  });
  return tarjetas_plan_empresas;
  }
}
