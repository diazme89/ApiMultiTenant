import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmp_libro_mayorAttributes {
  movimiento?: string;
  id?: number;
  tag?: string;
  fecha?: string;
  descripcion?: string;
  concepto?: string;
  numero?: string;
  debe?: number;
  haber?: number;
  cuenta?: number;
  tipo_comprobante?: string;
  cod_unidad_negocio?: number;
  cod_jurisdiccion?: number;
  orden?: number;
  plan_descripcion?: string;
  cod_empresa?: number;
}

export type tmp_libro_mayorPk = "id";
export type tmp_libro_mayorId = tmp_libro_mayor[tmp_libro_mayorPk];
export type tmp_libro_mayorCreationAttributes = Optional<tmp_libro_mayorAttributes, tmp_libro_mayorPk>;

export class tmp_libro_mayor extends Model<tmp_libro_mayorAttributes, tmp_libro_mayorCreationAttributes> implements tmp_libro_mayorAttributes {
  movimiento?: string;
  id?: number;
  tag?: string;
  fecha?: string;
  descripcion?: string;
  concepto?: string;
  numero?: string;
  debe?: number;
  haber?: number;
  cuenta?: number;
  tipo_comprobante?: string;
  cod_unidad_negocio?: number;
  cod_jurisdiccion?: number;
  orden?: number;
  plan_descripcion?: string;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmp_libro_mayor {
    tmp_libro_mayor.init({
    movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      primaryKey: true
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
      type: DataTypes.CHAR(230),
      allowNull: true
    },
    concepto: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    numero: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    plan_descripcion: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_libro_mayor',
    timestamps: false,
    indexes: [
      {
        name: "idx_tmp_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
    ]
  });
  return tmp_libro_mayor;
  }
}
