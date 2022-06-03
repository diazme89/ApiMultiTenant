import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface categoria_aplicativosAttributes {
  id: number;
  codigo?: number;
  campo?: string;
  valor?: string;
}

export type categoria_aplicativosPk = "id";
export type categoria_aplicativosId = categoria_aplicativos[categoria_aplicativosPk];
export type categoria_aplicativosCreationAttributes = Optional<categoria_aplicativosAttributes, categoria_aplicativosPk>;

export class categoria_aplicativos extends Model<categoria_aplicativosAttributes, categoria_aplicativosCreationAttributes> implements categoria_aplicativosAttributes {
  id!: number;
  codigo?: number;
  campo?: string;
  valor?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof categoria_aplicativos {
    categoria_aplicativos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    campo: {
      type: DataTypes.CHAR(70),
      allowNull: true
    },
    valor: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categoria_aplicativos',
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
  return categoria_aplicativos;
  }
}
