import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_articulos_imagenesAttributes {
  id: number;
  cod_articulo?: number;
  archivo_imagen?: string;
}

export type ec_articulos_imagenesPk = "id";
export type ec_articulos_imagenesId = ec_articulos_imagenes[ec_articulos_imagenesPk];
export type ec_articulos_imagenesCreationAttributes = Optional<ec_articulos_imagenesAttributes, ec_articulos_imagenesPk>;

export class ec_articulos_imagenes extends Model<ec_articulos_imagenesAttributes, ec_articulos_imagenesCreationAttributes> implements ec_articulos_imagenesAttributes {
  id!: number;
  cod_articulo?: number;
  archivo_imagen?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_articulos_imagenes {
    ec_articulos_imagenes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.DOUBLE(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    archivo_imagen: {
      type: DataTypes.STRING(600),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_articulos_imagenes',
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
  return ec_articulos_imagenes;
  }
}
