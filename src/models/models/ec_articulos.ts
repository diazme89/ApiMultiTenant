import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_articulosAttributes {
  id: number;
  cod_articulo?: number;
  cod_marca?: number;
  cod_origen?: number;
  estado_uso?: string;
  medida_alto?: number;
  medida_ancho?: number;
  medida_largo?: number;
  medida_peso?: number;
  orden?: number;
  color?: string;
  descripcion_html?: string;
  habilitado?: string;
  modo_de_compra?: string;
  tipo_publicacion?: string;
  garantia?: string;
  video?: string;
  promocion?: string;
  destacado?: string;
  novedad?: string;
  categoria_id?: string;
  categoria?: string;
  archivo_imagen1?: string;
  archivo_imagen2?: string;
  archivo_imagen3?: string;
  archivo_imagen4?: string;
  archivo_imagen5?: string;
}

export type ec_articulosPk = "id";
export type ec_articulosId = ec_articulos[ec_articulosPk];
export type ec_articulosCreationAttributes = Optional<ec_articulosAttributes, ec_articulosPk>;

export class ec_articulos extends Model<ec_articulosAttributes, ec_articulosCreationAttributes> implements ec_articulosAttributes {
  id!: number;
  cod_articulo?: number;
  cod_marca?: number;
  cod_origen?: number;
  estado_uso?: string;
  medida_alto?: number;
  medida_ancho?: number;
  medida_largo?: number;
  medida_peso?: number;
  orden?: number;
  color?: string;
  descripcion_html?: string;
  habilitado?: string;
  modo_de_compra?: string;
  tipo_publicacion?: string;
  garantia?: string;
  video?: string;
  promocion?: string;
  destacado?: string;
  novedad?: string;
  categoria_id?: string;
  categoria?: string;
  archivo_imagen1?: string;
  archivo_imagen2?: string;
  archivo_imagen3?: string;
  archivo_imagen4?: string;
  archivo_imagen5?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_articulos {
    ec_articulos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "cod_articulo"
    },
    cod_marca: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_origen: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    estado_uso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    medida_alto: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    medida_ancho: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    medida_largo: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    medida_peso: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    color: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    descripcion_html: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    modo_de_compra: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    tipo_publicacion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    garantia: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    video: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    promocion: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    destacado: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    novedad: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    categoria: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    archivo_imagen1: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    archivo_imagen2: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    archivo_imagen3: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    archivo_imagen4: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    archivo_imagen5: {
      type: DataTypes.CHAR(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_articulos',
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
        name: "cod_articulo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
    ]
  });
  return ec_articulos;
  }
}
