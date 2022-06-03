import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hist_peso_categoriaAttributes {
  id: number;
  cod_establecimiento: number;
  cod_actividad: number;
  cod_categoria: number;
  anio: number;
  mes: number;
  peso: number;
}

export type hist_peso_categoriaPk = "id";
export type hist_peso_categoriaId = hist_peso_categoria[hist_peso_categoriaPk];
export type hist_peso_categoriaCreationAttributes = Optional<hist_peso_categoriaAttributes, hist_peso_categoriaPk>;

export class hist_peso_categoria extends Model<hist_peso_categoriaAttributes, hist_peso_categoriaCreationAttributes> implements hist_peso_categoriaAttributes {
  id!: number;
  cod_establecimiento!: number;
  cod_actividad!: number;
  cod_categoria!: number;
  anio!: number;
  mes!: number;
  peso!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hist_peso_categoria {
    hist_peso_categoria.init({
    id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    peso: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hist_peso_categoria',
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
        name: "hist_peso_categoriaxkey1",
        using: "BTREE",
        fields: [
          { name: "cod_establecimiento" },
          { name: "cod_actividad" },
          { name: "cod_categoria" },
          { name: "anio" },
          { name: "mes" },
        ]
      },
    ]
  });
  return hist_peso_categoria;
  }
}
