import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_nov_insumosAttributes {
  id: number;
  id_reg?: number;
  id_labores?: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_labores_maquina?: number;
  fecha_alta?: Date;
  idproc?: number;
  flag?: number;
}

export type tt_nov_insumosPk = "id";
export type tt_nov_insumosId = tt_nov_insumos[tt_nov_insumosPk];
export type tt_nov_insumosCreationAttributes = Optional<tt_nov_insumosAttributes, tt_nov_insumosPk>;

export class tt_nov_insumos extends Model<tt_nov_insumosAttributes, tt_nov_insumosCreationAttributes> implements tt_nov_insumosAttributes {
  id!: number;
  id_reg?: number;
  id_labores?: number;
  cod_insumo?: number;
  cantidad?: number;
  cod_deposito?: number;
  dosis?: number;
  tipo?: string;
  id_labores_maquina?: number;
  fecha_alta?: Date;
  idproc?: number;
  flag?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_nov_insumos {
    tt_nov_insumos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_reg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_insumo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id_labores_maquina: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    flag: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_nov_insumos',
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
        name: "tt_nov_insumosxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "flag" },
        ]
      },
      {
        name: "tt_nov_insumosxkey2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id_reg" },
          { name: "flag" },
        ]
      },
    ]
  });
  return tt_nov_insumos;
  }
}
