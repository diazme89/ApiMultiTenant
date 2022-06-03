import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface act_categoriaAttributes {
  id: number;
  cod_actividad?: number;
  cod_categoria?: number;
  cod_establecimiento?: number;
  id_cabecera?: number;
}

export type act_categoriaPk = "id";
export type act_categoriaId = act_categoria[act_categoriaPk];
export type act_categoriaCreationAttributes = Optional<act_categoriaAttributes, act_categoriaPk>;

export class act_categoria extends Model<act_categoriaAttributes, act_categoriaCreationAttributes> implements act_categoriaAttributes {
  id!: number;
  cod_actividad?: number;
  cod_categoria?: number;
  cod_establecimiento?: number;
  id_cabecera?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof act_categoria {
    act_categoria.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    id_cabecera: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'act_categoria',
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
      {
        name: "act_categoriaxkey1",
        using: "BTREE",
        fields: [
          { name: "id_cabecera" },
        ]
      },
    ]
  });
  return act_categoria;
  }
}
