import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_periodosAttributes {
  id: number;
  codigo?: number;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;
}

export type tt_periodosPk = "id";
export type tt_periodosId = tt_periodos[tt_periodosPk];
export type tt_periodosCreationAttributes = Optional<tt_periodosAttributes, tt_periodosPk>;

export class tt_periodos extends Model<tt_periodosAttributes, tt_periodosCreationAttributes> implements tt_periodosAttributes {
  id!: number;
  codigo?: number;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_periodos {
    tt_periodos.init({
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
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_periodos',
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
        name: "tt_periodosxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
          { name: "marca" },
        ]
      },
    ]
  });
  return tt_periodos;
  }
}
