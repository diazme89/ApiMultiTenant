import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hist_precio_categoriaAttributes {
  id: number;
  cod_categoria: number;
  anio: number;
  mes: number;
  valor: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
}

export type hist_precio_categoriaPk = "id";
export type hist_precio_categoriaId = hist_precio_categoria[hist_precio_categoriaPk];
export type hist_precio_categoriaCreationAttributes = Optional<hist_precio_categoriaAttributes, hist_precio_categoriaPk>;

export class hist_precio_categoria extends Model<hist_precio_categoriaAttributes, hist_precio_categoriaCreationAttributes> implements hist_precio_categoriaAttributes {
  id!: number;
  cod_categoria!: number;
  anio!: number;
  mes!: number;
  valor!: number;
  cod_establecimiento?: number;
  cod_actividad?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hist_precio_categoria {
    hist_precio_categoria.init({
    id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
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
    valor: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hist_precio_categoria',
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
        name: "hist_precio_categoriaxkey1",
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
  return hist_precio_categoria;
  }
}
