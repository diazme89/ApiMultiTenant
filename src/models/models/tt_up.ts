import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_upAttributes {
  id: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;
}

export type tt_upPk = "id";
export type tt_upId = tt_up[tt_upPk];
export type tt_upCreationAttributes = Optional<tt_upAttributes, tt_upPk>;

export class tt_up extends Model<tt_upAttributes, tt_upCreationAttributes> implements tt_upAttributes {
  id!: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_up {
    tt_up.init({
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
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_up',
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
        name: "tt_up_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_up;
  }
}
