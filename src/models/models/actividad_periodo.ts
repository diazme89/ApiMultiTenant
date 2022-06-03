import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actividad_periodoAttributes {
  id: number;
  cod_actividad?: number;
  cod_periodo?: number;
}

export type actividad_periodoPk = "id";
export type actividad_periodoId = actividad_periodo[actividad_periodoPk];
export type actividad_periodoCreationAttributes = Optional<actividad_periodoAttributes, actividad_periodoPk>;

export class actividad_periodo extends Model<actividad_periodoAttributes, actividad_periodoCreationAttributes> implements actividad_periodoAttributes {
  id!: number;
  cod_actividad?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof actividad_periodo {
    actividad_periodo.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actividad_periodo',
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
  return actividad_periodo;
  }
}
