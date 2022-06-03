import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_importacionAttributes {
  id: number;
  nombre_tabla: string;
  orden: number;
  nombre_campo: string;
  descripcion_campo: string;
  tipo_campo: string;
  precision_campo?: number;
  escala_campo?: number;
  longitud_campo?: number;
  campo_nulo?: string;
  posicion_campo?: number;
  usa_gf_secuencia?: string;
  usa_renumeracion?: string;
}

export type config_importacionPk = "id";
export type config_importacionId = config_importacion[config_importacionPk];
export type config_importacionCreationAttributes = Optional<config_importacionAttributes, config_importacionPk>;

export class config_importacion extends Model<config_importacionAttributes, config_importacionCreationAttributes> implements config_importacionAttributes {
  id!: number;
  nombre_tabla!: string;
  orden!: number;
  nombre_campo!: string;
  descripcion_campo!: string;
  tipo_campo!: string;
  precision_campo?: number;
  escala_campo?: number;
  longitud_campo?: number;
  campo_nulo?: string;
  posicion_campo?: number;
  usa_gf_secuencia?: string;
  usa_renumeracion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_importacion {
    config_importacion.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nombre_tabla: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre_campo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion_campo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo_campo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    precision_campo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    escala_campo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitud_campo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    campo_nulo: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    posicion_campo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usa_gf_secuencia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usa_renumeracion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_importacion',
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
        name: "config_importacion_key1",
        using: "BTREE",
        fields: [
          { name: "nombre_tabla" },
          { name: "orden" },
        ]
      },
    ]
  });
  return config_importacion;
  }
}
