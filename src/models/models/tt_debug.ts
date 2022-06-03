import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_debugAttributes {
  id: number;
  detalle?: string;
  fecha?: Date;
}

export type tt_debugPk = "id";
export type tt_debugId = tt_debug[tt_debugPk];
export type tt_debugCreationAttributes = Optional<tt_debugAttributes, tt_debugPk>;

export class tt_debug extends Model<tt_debugAttributes, tt_debugCreationAttributes> implements tt_debugAttributes {
  id!: number;
  detalle?: string;
  fecha?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_debug {
    tt_debug.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    detalle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_debug',
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
  return tt_debug;
  }
}
