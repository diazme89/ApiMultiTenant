import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rubros_ivaAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type rubros_ivaPk = "id";
export type rubros_ivaId = rubros_iva[rubros_ivaPk];
export type rubros_ivaCreationAttributes = Optional<rubros_ivaAttributes, rubros_ivaPk>;

export class rubros_iva extends Model<rubros_ivaAttributes, rubros_ivaCreationAttributes> implements rubros_ivaAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof rubros_iva {
    rubros_iva.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rubros_iva',
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
  return rubros_iva;
  }
}
