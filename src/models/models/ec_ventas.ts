import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_ventasAttributes {
  id: number;
  id_mercadolibre?: number;
  id_infomanager?: number;
  fecha?: string;
  estado?: string;
  moneda?: string;
  cotizacion?: number;
  descripcion?: string;
  cliente_id_ml?: number;
  cliente?: string;
  tipo_pago?: string;
  total?: number;
  iva_importe?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  id_ecommerce?: number;
  cod_cliente?: number;
  condicion_venta?: string;
  cod_domicilio?: number;
  cod_envio?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;
}

export type ec_ventasPk = "id";
export type ec_ventasId = ec_ventas[ec_ventasPk];
export type ec_ventasCreationAttributes = Optional<ec_ventasAttributes, ec_ventasPk>;

export class ec_ventas extends Model<ec_ventasAttributes, ec_ventasCreationAttributes> implements ec_ventasAttributes {
  id!: number;
  id_mercadolibre?: number;
  id_infomanager?: number;
  fecha?: string;
  estado?: string;
  moneda?: string;
  cotizacion?: number;
  descripcion?: string;
  cliente_id_ml?: number;
  cliente?: string;
  tipo_pago?: string;
  total?: number;
  iva_importe?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  id_ecommerce?: number;
  cod_cliente?: number;
  condicion_venta?: string;
  cod_domicilio?: number;
  cod_envio?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_ventas {
    ec_ventas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_mercadolibre: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    id_infomanager: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    moneda: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    cotizacion: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    cliente_id_ml: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    cliente: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tipo_pago: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    iva_importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(30),
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
    id_ecommerce: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    condicion_venta: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_domicilio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_envio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_ventas',
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
  return ec_ventas;
  }
}
