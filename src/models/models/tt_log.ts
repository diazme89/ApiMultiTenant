import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_logAttributes {
  id: number;
  valor?: string;
  fecha_alta?: Date;
}

export type tt_logPk = "id";
export type tt_logId = tt_log[tt_logPk];
export type tt_logCreationAttributes = Optional<tt_logAttributes, tt_logPk>;

export class tt_log extends Model<tt_logAttributes, tt_logCreationAttributes> implements tt_logAttributes {
  id!: number;
  valor?: string;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_log {
    tt_log.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    valor: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_log',
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
  return tt_log;
  }
}
