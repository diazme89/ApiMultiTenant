import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_contratistasAttributes {
  id: number;
  cod_contratista?: number;
  cod_periodo?: number;
}

export type pla_contratistasPk = "id";
export type pla_contratistasId = pla_contratistas[pla_contratistasPk];
export type pla_contratistasCreationAttributes = Optional<pla_contratistasAttributes, pla_contratistasPk>;

export class pla_contratistas extends Model<pla_contratistasAttributes, pla_contratistasCreationAttributes> implements pla_contratistasAttributes {
  id!: number;
  cod_contratista?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_contratistas {
    pla_contratistas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_contratista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_contratistas',
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
  return pla_contratistas;
  }
}
