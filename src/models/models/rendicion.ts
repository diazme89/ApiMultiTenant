import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rendicionAttributes {
  id: number;
  id_usuario?: number;
  fecha?: string;
  cod_rendicion?: number;
  cod_moneda?: number;
  cod_empresa?: number;
  tag?: string;
  OBSERVACION?: string;
  hora?: string;
  tipo?: string;
  saldo?: number;
  estado?: string;
  id_cierre?: number;
  fecha_cierre?: string;
  id_usuario_tesorero?: number;
  id_rendicion_anterior?: number;
}

export type rendicionPk = "id";
export type rendicionId = rendicion[rendicionPk];
export type rendicionCreationAttributes = Optional<rendicionAttributes, rendicionPk>;

export class rendicion extends Model<rendicionAttributes, rendicionCreationAttributes> implements rendicionAttributes {
  id!: number;
  id_usuario?: number;
  fecha?: string;
  cod_rendicion?: number;
  cod_moneda?: number;
  cod_empresa?: number;
  tag?: string;
  OBSERVACION?: string;
  hora?: string;
  tipo?: string;
  saldo?: number;
  estado?: string;
  id_cierre?: number;
  fecha_cierre?: string;
  id_usuario_tesorero?: number;
  id_rendicion_anterior?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof rendicion {
    rendicion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_rendicion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_moneda: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    id_cierre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_cierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_usuario_tesorero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_rendicion_anterior: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rendicion',
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
  return rendicion;
  }
}
