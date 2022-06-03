import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface labores_log_externoAttributes {
  id: number;
  id_labores: number;
}

export type labores_log_externoPk = "id";
export type labores_log_externoId = labores_log_externo[labores_log_externoPk];
export type labores_log_externoCreationAttributes = Optional<labores_log_externoAttributes, labores_log_externoPk>;

export class labores_log_externo extends Model<labores_log_externoAttributes, labores_log_externoCreationAttributes> implements labores_log_externoAttributes {
  id!: number;
  id_labores!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores_log_externo {
    labores_log_externo.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'labores_log_externo',
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
  return labores_log_externo;
  }
}
