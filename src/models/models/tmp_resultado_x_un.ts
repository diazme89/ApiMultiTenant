import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmp_resultado_x_unAttributes {
  id: number;
  idproc?: number;
  tag?: string;
  fecha?: string;
  descripcion?: string;
  concepto?: string;
  id_cuenta?: number;
  plan_descripcion?: string;
  debe?: number;
  haber?: number;
  movimiento?: string;
  numero?: string;
  cod_unidad_negocio?: number;
  cuenta_madre?: number;
  fecha_alta?: Date;
}

export type tmp_resultado_x_unPk = "id";
export type tmp_resultado_x_unId = tmp_resultado_x_un[tmp_resultado_x_unPk];
export type tmp_resultado_x_unCreationAttributes = Optional<tmp_resultado_x_unAttributes, tmp_resultado_x_unPk>;

export class tmp_resultado_x_un extends Model<tmp_resultado_x_unAttributes, tmp_resultado_x_unCreationAttributes> implements tmp_resultado_x_unAttributes {
  id!: number;
  idproc?: number;
  tag?: string;
  fecha?: string;
  descripcion?: string;
  concepto?: string;
  id_cuenta?: number;
  plan_descripcion?: string;
  debe?: number;
  haber?: number;
  movimiento?: string;
  numero?: string;
  cod_unidad_negocio?: number;
  cuenta_madre?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmp_resultado_x_un {
    tmp_resultado_x_un.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    concepto: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    plan_descripcion: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tmp_resultado_x_un',
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
  return tmp_resultado_x_un;
  }
}
