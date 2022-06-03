import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mod_tareAttributes {
  numero?: number;
  item_nro: number;
  tarea?: number;
  prop_cont?: string;
  contratist?: number;
  id: number;
  orden?: number;
  mes?: number;
  porc_superficie?: number;
}

export type mod_tarePk = "id";
export type mod_tareId = mod_tare[mod_tarePk];
export type mod_tareCreationAttributes = Optional<mod_tareAttributes, mod_tarePk>;

export class mod_tare extends Model<mod_tareAttributes, mod_tareCreationAttributes> implements mod_tareAttributes {
  numero?: number;
  item_nro!: number;
  tarea?: number;
  prop_cont?: string;
  contratist?: number;
  id!: number;
  orden?: number;
  mes?: number;
  porc_superficie?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof mod_tare {
    mod_tare.init({
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    item_nro: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: false
    },
    tarea: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    prop_cont: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    contratist: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    orden: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    porc_superficie: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mod_tare',
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
  return mod_tare;
  }
}
