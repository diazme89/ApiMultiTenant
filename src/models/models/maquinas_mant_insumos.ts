import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface maquinas_mant_insumosAttributes {
  id: number;
  id_maq_mant: number;
  cod_insumo?: number;
  cantidad?: number;
}

export type maquinas_mant_insumosPk = "id";
export type maquinas_mant_insumosId = maquinas_mant_insumos[maquinas_mant_insumosPk];
export type maquinas_mant_insumosCreationAttributes = Optional<maquinas_mant_insumosAttributes, maquinas_mant_insumosPk>;

export class maquinas_mant_insumos extends Model<maquinas_mant_insumosAttributes, maquinas_mant_insumosCreationAttributes> implements maquinas_mant_insumosAttributes {
  id!: number;
  id_maq_mant!: number;
  cod_insumo?: number;
  cantidad?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof maquinas_mant_insumos {
    maquinas_mant_insumos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_maq_mant: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'maquinas_mant_insumos',
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
  return maquinas_mant_insumos;
  }
}
