import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface labores_insumosAttributes {
  id: number;
  id_labores: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_labores_maquina?: number;
}

export type labores_insumosPk = "id";
export type labores_insumosId = labores_insumos[labores_insumosPk];
export type labores_insumosCreationAttributes = Optional<labores_insumosAttributes, labores_insumosPk>;

export class labores_insumos extends Model<labores_insumosAttributes, labores_insumosCreationAttributes> implements labores_insumosAttributes {
  id!: number;
  id_labores!: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_labores_maquina?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores_insumos {
    labores_insumos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(11,4),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id_labores_maquina: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labores_insumos',
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
        name: "labores_insumosxkey1",
        using: "BTREE",
        fields: [
          { name: "id_labores" },
        ]
      },
      {
        name: "labores_insumosxkey2",
        using: "BTREE",
        fields: [
          { name: "id_labores" },
          { name: "id_labores_maquina" },
        ]
      },
    ]
  });
  return labores_insumos;
  }
}
