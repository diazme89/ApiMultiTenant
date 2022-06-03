import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface asientos_ivaAttributes {
  id: number;
  cod_proveedor?: number;
  cod_cliente?: number;
  tipo_comprobante?: string;
  letra_comprobante?: string;
  numero_comprobante?: number;
  total_facturado?: number;
  importe_gravado?: number;
  importe_exento?: number;
  importe_nogravado?: number;
  importe_iva21?: number;
  importe_iva10?: number;
  importe_iva27?: number;
  importe_otro_iva?: number;
  retenciones_porcentaje?: number;
  retenciones_importe?: number;
  importe_noinscriptos?: number;
  tipo?: string;
  ingresos_brutos?: number;
  fecha?: string;
  id_asientos?: number;
}

export type asientos_ivaPk = "id";
export type asientos_ivaId = asientos_iva[asientos_ivaPk];
export type asientos_ivaCreationAttributes = Optional<asientos_ivaAttributes, asientos_ivaPk>;

export class asientos_iva extends Model<asientos_ivaAttributes, asientos_ivaCreationAttributes> implements asientos_ivaAttributes {
  id!: number;
  cod_proveedor?: number;
  cod_cliente?: number;
  tipo_comprobante?: string;
  letra_comprobante?: string;
  numero_comprobante?: number;
  total_facturado?: number;
  importe_gravado?: number;
  importe_exento?: number;
  importe_nogravado?: number;
  importe_iva21?: number;
  importe_iva10?: number;
  importe_iva27?: number;
  importe_otro_iva?: number;
  retenciones_porcentaje?: number;
  retenciones_importe?: number;
  importe_noinscriptos?: number;
  tipo?: string;
  ingresos_brutos?: number;
  fecha?: string;
  id_asientos?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof asientos_iva {
    asientos_iva.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    letra_comprobante: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    total_facturado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_gravado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_exento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_nogravado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_iva21: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_iva10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_iva27: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_otro_iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    retenciones_porcentaje: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    retenciones_importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe_noinscriptos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ingresos_brutos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_asientos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asientos_iva',
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
  return asientos_iva;
  }
}
