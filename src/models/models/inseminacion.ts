import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface inseminacionAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type inseminacionPk = "id";
export type inseminacionId = inseminacion[inseminacionPk];
export type inseminacionCreationAttributes = Optional<inseminacionAttributes, inseminacionPk>;

export class inseminacion extends Model<inseminacionAttributes, inseminacionCreationAttributes> implements inseminacionAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof inseminacion {
    inseminacion.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inseminacion',
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
  return inseminacion;
  }
}
