import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_fiscalAttributes {
  id: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  terminal?: string;
  accion?: string;
  tipo_comprobante?: string;
  id_comprobante?: number;
  numero_impresora?: number;
  fecha_impresion?: string;
  hora_impresion?: string;
  estado?: number;
  error?: string;
  fecha_alta?: Date;
}

export type tt_fiscalPk = "id";
export type tt_fiscalId = tt_fiscal[tt_fiscalPk];
export type tt_fiscalCreationAttributes = Optional<tt_fiscalAttributes, tt_fiscalPk>;

export class tt_fiscal extends Model<tt_fiscalAttributes, tt_fiscalCreationAttributes> implements tt_fiscalAttributes {
  id!: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  terminal?: string;
  accion?: string;
  tipo_comprobante?: string;
  id_comprobante?: number;
  numero_impresora?: number;
  fecha_impresion?: string;
  hora_impresion?: string;
  estado?: number;
  error?: string;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_fiscal {
    tt_fiscal.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    terminal: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    accion: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_impresora: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_impresion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_impresion: {
      type: DataTypes.TIME,
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    error: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_fiscal',
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
  return tt_fiscal;
  }
}
