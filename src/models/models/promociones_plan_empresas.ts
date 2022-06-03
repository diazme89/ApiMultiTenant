import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface promociones_plan_empresasAttributes {
  id: number;
  cod_empresa?: number;
  id_promocion_plan?: number;
}

export type promociones_plan_empresasPk = "id";
export type promociones_plan_empresasId = promociones_plan_empresas[promociones_plan_empresasPk];
export type promociones_plan_empresasCreationAttributes = Optional<promociones_plan_empresasAttributes, promociones_plan_empresasPk>;

export class promociones_plan_empresas extends Model<promociones_plan_empresasAttributes, promociones_plan_empresasCreationAttributes> implements promociones_plan_empresasAttributes {
  id!: number;
  cod_empresa?: number;
  id_promocion_plan?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof promociones_plan_empresas {
    promociones_plan_empresas.init({
    id: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    },
    id_promocion_plan: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promociones_plan_empresas',
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
  return promociones_plan_empresas;
  }
}
