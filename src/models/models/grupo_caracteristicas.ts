import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface grupo_caracteristicasAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
}

export type grupo_caracteristicasPk = "id";
export type grupo_caracteristicasId = grupo_caracteristicas[grupo_caracteristicasPk];
export type grupo_caracteristicasCreationAttributes = Optional<grupo_caracteristicasAttributes, grupo_caracteristicasPk>;

export class grupo_caracteristicas extends Model<grupo_caracteristicasAttributes, grupo_caracteristicasCreationAttributes> implements grupo_caracteristicasAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof grupo_caracteristicas {
    grupo_caracteristicas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grupo_caracteristicas',
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
  return grupo_caracteristicas;
  }
}
