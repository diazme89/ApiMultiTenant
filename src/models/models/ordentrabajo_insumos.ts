import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordentrabajo_insumosAttributes {
  id: number;
  id_ordentrabajo: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_ordentrabajo_maquina?: number;
}

export type ordentrabajo_insumosPk = "id";
export type ordentrabajo_insumosId = ordentrabajo_insumos[ordentrabajo_insumosPk];
export type ordentrabajo_insumosCreationAttributes = Optional<ordentrabajo_insumosAttributes, ordentrabajo_insumosPk>;

export class ordentrabajo_insumos extends Model<ordentrabajo_insumosAttributes, ordentrabajo_insumosCreationAttributes> implements ordentrabajo_insumosAttributes {
  id!: number;
  id_ordentrabajo!: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_ordentrabajo_maquina?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ordentrabajo_insumos {
    ordentrabajo_insumos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_ordentrabajo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(5,0),
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
    id_ordentrabajo_maquina: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordentrabajo_insumos',
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
  return ordentrabajo_insumos;
  }
}
