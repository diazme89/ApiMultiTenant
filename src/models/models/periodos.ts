import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface periodosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  fecha_cierre?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
}

export type periodosPk = "id";
export type periodosId = periodos[periodosPk];
export type periodosCreationAttributes = Optional<periodosAttributes, periodosPk>;

export class periodos extends Model<periodosAttributes, periodosCreationAttributes> implements periodosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  fecha_cierre?: string;
  fecha_desde?: string;
  fecha_hasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof periodos {
    periodos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fecha_cierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'periodos',
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
  return periodos;
  }
}
