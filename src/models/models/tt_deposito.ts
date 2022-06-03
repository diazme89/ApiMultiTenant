import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_depositoAttributes {
  id: number;
  idproc: number;
  cod_deposito?: number;
  marca?: number;
  fecha_alta?: Date;
}

export type tt_depositoPk = "id";
export type tt_depositoId = tt_deposito[tt_depositoPk];
export type tt_depositoCreationAttributes = Optional<tt_depositoAttributes, tt_depositoPk>;

export class tt_deposito extends Model<tt_depositoAttributes, tt_depositoCreationAttributes> implements tt_depositoAttributes {
  id!: number;
  idproc!: number;
  cod_deposito?: number;
  marca?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_deposito {
    tt_deposito.init({
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
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    marca: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_deposito',
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
        name: "tt_deposito_idx_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_deposito;
  }
}
