import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface datawindowsAttributes {
  id: number;
  dataobject?: string;
  objeto?: string;
  visible?: number;
  x?: number;
  y?: number;
  ancho?: number;
  alto?: number;
  texto?: string;
  color_texto?: number;
  color_fondo?: number;
  negrita?: number;
  cursiva?: number;
  borde?: number;
  papel_orientacion?: number;
  papel_tamanio?: number;
  papel_bandeja?: number;
  papel_person_alto?: number;
  papel_person_ancho?: number;
  header?: number;
  detail?: number;
  summary?: number;
  footer?: number;
  letra_tamanio?: number;
  letra_fuente?: string;
  left_margin?: number;
  top_margin?: number;
}

export type datawindowsPk = "id";
export type datawindowsId = datawindows[datawindowsPk];
export type datawindowsCreationAttributes = Optional<datawindowsAttributes, datawindowsPk>;

export class datawindows extends Model<datawindowsAttributes, datawindowsCreationAttributes> implements datawindowsAttributes {
  id!: number;
  dataobject?: string;
  objeto?: string;
  visible?: number;
  x?: number;
  y?: number;
  ancho?: number;
  alto?: number;
  texto?: string;
  color_texto?: number;
  color_fondo?: number;
  negrita?: number;
  cursiva?: number;
  borde?: number;
  papel_orientacion?: number;
  papel_tamanio?: number;
  papel_bandeja?: number;
  papel_person_alto?: number;
  papel_person_ancho?: number;
  header?: number;
  detail?: number;
  summary?: number;
  footer?: number;
  letra_tamanio?: number;
  letra_fuente?: string;
  left_margin?: number;
  top_margin?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof datawindows {
    datawindows.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dataobject: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    objeto: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    visible: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    x: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    y: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ancho: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    texto: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    color_texto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    color_fondo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    negrita: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cursiva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    borde: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    papel_orientacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    papel_tamanio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    papel_bandeja: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    papel_person_alto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    papel_person_ancho: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    header: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    detail: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    summary: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    footer: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    letra_tamanio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    letra_fuente: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    left_margin: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    },
    top_margin: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'datawindows',
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
        name: "datawindows_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "datawindows_objeto_dataobject",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "objeto" },
          { name: "dataobject" },
        ]
      },
    ]
  });
  return datawindows;
  }
}
