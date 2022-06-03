import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lista_preciosAttributes {
  cod_lista?: number;
  cod_articulo?: number;
  porce?: number;
  fecha_gra?: Date;
  id: number;
  descripcion?: string;
  descuento?: number;
  atributo_1?: number;
  atributo_2?: number;
  atributo_3?: number;
  atributo_4?: number;
  atributo_5?: number;
  atributo_6?: number;
  atributo_7?: number;
  precio_vta?: number;
  cod_compatibilidad?: string;
}

export type lista_preciosPk = "id";
export type lista_preciosId = lista_precios[lista_preciosPk];
export type lista_preciosCreationAttributes = Optional<lista_preciosAttributes, lista_preciosPk>;

export class lista_precios extends Model<lista_preciosAttributes, lista_preciosCreationAttributes> implements lista_preciosAttributes {
  cod_lista?: number;
  cod_articulo?: number;
  porce?: number;
  fecha_gra?: Date;
  id!: number;
  descripcion?: string;
  descuento?: number;
  atributo_1?: number;
  atributo_2?: number;
  atributo_3?: number;
  atributo_4?: number;
  atributo_5?: number;
  atributo_6?: number;
  atributo_7?: number;
  precio_vta?: number;
  cod_compatibilidad?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof lista_precios {
    lista_precios.init({
    cod_lista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    porce: {
      type: DataTypes.DECIMAL(14,5),
      allowNull: true
    },
    fecha_gra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    descuento: {
      type: DataTypes.DECIMAL(14,5),
      allowNull: true
    },
    atributo_1: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_2: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_3: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_4: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_5: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_6: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    atributo_7: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    precio_vta: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_compatibilidad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lista_precios',
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
        name: "lista_precios_xkey1",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
          { name: "cod_lista" },
        ]
      },
    ]
  });
  return lista_precios;
  }
}
