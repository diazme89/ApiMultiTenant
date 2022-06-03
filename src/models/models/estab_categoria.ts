import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface estab_categoriaAttributes {
  id: number;
  cod_establecimiento?: number;
  cod_categoria?: number;
}

export type estab_categoriaPk = "id";
export type estab_categoriaId = estab_categoria[estab_categoriaPk];
export type estab_categoriaCreationAttributes = Optional<estab_categoriaAttributes, estab_categoriaPk>;

export class estab_categoria extends Model<estab_categoriaAttributes, estab_categoriaCreationAttributes> implements estab_categoriaAttributes {
  id!: number;
  cod_establecimiento?: number;
  cod_categoria?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof estab_categoria {
    estab_categoria.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estab_categoria',
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
  return estab_categoria;
  }
}
