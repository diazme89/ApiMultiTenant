import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_pla_insumosAttributes {
  id: number;
  codigo?: number;
  mes?: number;
  anio?: number;
  cantidad?: number;
  precio?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_pla_insumosPk = "id";
export type tt_pla_insumosId = tt_pla_insumos[tt_pla_insumosPk];
export type tt_pla_insumosCreationAttributes = Optional<tt_pla_insumosAttributes, tt_pla_insumosPk>;

export class tt_pla_insumos extends Model<tt_pla_insumosAttributes, tt_pla_insumosCreationAttributes> implements tt_pla_insumosAttributes {
  id!: number;
  codigo?: number;
  mes?: number;
  anio?: number;
  cantidad?: number;
  precio?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_pla_insumos {
    tt_pla_insumos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_pla_insumos',
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
        name: "tt_pla_insumosxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_pla_insumos;
  }
}
