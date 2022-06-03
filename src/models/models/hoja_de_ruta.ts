import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hoja_de_rutaAttributes {
  id: number;
  fecha?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  nro_de_hoja?: number;
  cod_empresa?: number;
  tag?: string;
  cod_transporte?: number;
  cod_turno?: number;
  detalle?: string;
  importe_total?: number;
  importe_cobrado?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
}

export type hoja_de_rutaPk = "id";
export type hoja_de_rutaId = hoja_de_ruta[hoja_de_rutaPk];
export type hoja_de_rutaCreationAttributes = Optional<hoja_de_rutaAttributes, hoja_de_rutaPk>;

export class hoja_de_ruta extends Model<hoja_de_rutaAttributes, hoja_de_rutaCreationAttributes> implements hoja_de_rutaAttributes {
  id!: number;
  fecha?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  nro_de_hoja?: number;
  cod_empresa?: number;
  tag?: string;
  cod_transporte?: number;
  cod_turno?: number;
  detalle?: string;
  importe_total?: number;
  importe_cobrado?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof hoja_de_ruta {
    hoja_de_ruta.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nro_de_hoja: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_transporte: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_turno: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_cobrado: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'hoja_de_ruta',
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
  return hoja_de_ruta;
  }
}
