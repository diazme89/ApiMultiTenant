import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_sqlAttributes {
  id: number;
  idproc: number;
  sqlcmd?: string;
  sqlstatus?: string;
  fecha_alta?: Date;
}

export type tt_sqlPk = "id";
export type tt_sqlId = tt_sql[tt_sqlPk];
export type tt_sqlCreationAttributes = Optional<tt_sqlAttributes, tt_sqlPk>;

export class tt_sql extends Model<tt_sqlAttributes, tt_sqlCreationAttributes> implements tt_sqlAttributes {
  id!: number;
  idproc!: number;
  sqlcmd?: string;
  sqlstatus?: string;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_sql {
    tt_sql.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    sqlcmd: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    sqlstatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_sql',
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
        name: "i_sql_idprod",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_sql;
  }
}
