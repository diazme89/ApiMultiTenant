import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_configAttributes {
  id: number;
  cod_punto?: number;
  descripcion?: string;
  precio_x_punto?: number;
  cod_cuenta?: number;
  aplica_todos_articulos?: string;
  aplica_todos_clientes?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  dias_vigencia?: number;
  monto_min_comprobante?: number;
  mostrar_mensaje?: string;
  aplica_con_descuento?: string;
  iva_por?: number;
  descuento_max?: number;
}

export type puntos_configPk = "id";
export type puntos_configId = puntos_config[puntos_configPk];
export type puntos_configCreationAttributes = Optional<puntos_configAttributes, puntos_configPk>;

export class puntos_config extends Model<puntos_configAttributes, puntos_configCreationAttributes> implements puntos_configAttributes {
  id!: number;
  cod_punto?: number;
  descripcion?: string;
  precio_x_punto?: number;
  cod_cuenta?: number;
  aplica_todos_articulos?: string;
  aplica_todos_clientes?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  dias_vigencia?: number;
  monto_min_comprobante?: number;
  mostrar_mensaje?: string;
  aplica_con_descuento?: string;
  iva_por?: number;
  descuento_max?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_config {
    puntos_config.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_punto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    precio_x_punto: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    aplica_todos_articulos: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    aplica_todos_clientes: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dias_vigencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    monto_min_comprobante: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    mostrar_mensaje: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    aplica_con_descuento: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    iva_por: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    descuento_max: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_config',
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
  return puntos_config;
  }
}
