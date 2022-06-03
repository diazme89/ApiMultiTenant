import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_categorias_mlAttributes {
  id: number;
  id_mercadolibre?: string;
  descripcion?: string;
  cod_rubro?: number;
  cod_subrubro?: number;
  nivel?: number;
}

export type ec_categorias_mlPk = "id";
export type ec_categorias_mlId = ec_categorias_ml[ec_categorias_mlPk];
export type ec_categorias_mlCreationAttributes = Optional<ec_categorias_mlAttributes, ec_categorias_mlPk>;

export class ec_categorias_ml extends Model<ec_categorias_mlAttributes, ec_categorias_mlCreationAttributes> implements ec_categorias_mlAttributes {
  id!: number;
  id_mercadolibre?: string;
  descripcion?: string;
  cod_rubro?: number;
  cod_subrubro?: number;
  nivel?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_categorias_ml {
    ec_categorias_ml.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mercadolibre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    cod_rubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_subrubro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_categorias_ml',
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
  return ec_categorias_ml;
  }
}
