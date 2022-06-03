import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_tareAttributes {
  numero?: number;
  item_nro?: number;
  tarea?: number;
  prop_cont?: string;
  contratist?: number;
  importe1?: number;
  importe2?: number;
  importe3?: number;
  importe4?: number;
  importe5?: number;
  importe6?: number;
  importe7?: number;
  importe8?: number;
  importe9?: number;
  importe10?: number;
  importe11?: number;
  importe12?: number;
  precio?: number;
  superficie?: number;
  id: number;
  orden?: number;
  mes?: number;
}

export type pla_tarePk = "id";
export type pla_tareId = pla_tare[pla_tarePk];
export type pla_tareCreationAttributes = Optional<pla_tareAttributes, pla_tarePk>;

export class pla_tare extends Model<pla_tareAttributes, pla_tareCreationAttributes> implements pla_tareAttributes {
  numero?: number;
  item_nro?: number;
  tarea?: number;
  prop_cont?: string;
  contratist?: number;
  importe1?: number;
  importe2?: number;
  importe3?: number;
  importe4?: number;
  importe5?: number;
  importe6?: number;
  importe7?: number;
  importe8?: number;
  importe9?: number;
  importe10?: number;
  importe11?: number;
  importe12?: number;
  precio?: number;
  superficie?: number;
  id!: number;
  orden?: number;
  mes?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_tare {
    pla_tare.init({
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    item_nro: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: true
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
    importe1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(10,2),
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
    }
  }, {
    sequelize,
    tableName: 'pla_tare',
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
  return pla_tare;
  }
}
