import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface webserviceAttributes {
  id: number;
  codigo: number;
  nombre?: string;
  descripcion?: string;
  activo?: string;
  client_id?: string;
  client_secret?: string;
  user_name?: string;
  PASSWORD?: string;
  grant_type?: string;
  post_url?: string;
  lote?: number;
  sincroniza_automatico?: string;
  id_usuario?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;
  sincronizacion_estatica?: string;
  fecha_sinc_automatica?: string;
  hora_sinc_automatica?: string;
  intervalo_hora_sinc_auto?: number;
  ultima_fecha_sinc?: string;
  ultima_hora_sinc?: string;
  mostrar_advertencia?: string;
  observaciones?: string;
  cod_empresa?: number;
  cod_cuenta_contable_envios?: number;
  cod_deposito_cabecera?: number;
  cod_lista_precios_cabecera?: number;
  cod_cuenta_contable_interes?: number;
  cod_cliente_predeterminado?: number;
  usa_cod_compatibilidad_lp?: string;
  usa_plugin_mayorista?: string;
  cod_lista_mayorista?: number;
}

export type webservicePk = "id";
export type webserviceId = webservice[webservicePk];
export type webserviceCreationAttributes = Optional<webserviceAttributes, webservicePk>;

export class webservice extends Model<webserviceAttributes, webserviceCreationAttributes> implements webserviceAttributes {
  id!: number;
  codigo!: number;
  nombre?: string;
  descripcion?: string;
  activo?: string;
  client_id?: string;
  client_secret?: string;
  user_name?: string;
  PASSWORD?: string;
  grant_type?: string;
  post_url?: string;
  lote?: number;
  sincroniza_automatico?: string;
  id_usuario?: number;
  cod_deposito?: number;
  cod_lista_precios?: number;
  sincronizacion_estatica?: string;
  fecha_sinc_automatica?: string;
  hora_sinc_automatica?: string;
  intervalo_hora_sinc_auto?: number;
  ultima_fecha_sinc?: string;
  ultima_hora_sinc?: string;
  mostrar_advertencia?: string;
  observaciones?: string;
  cod_empresa?: number;
  cod_cuenta_contable_envios?: number;
  cod_deposito_cabecera?: number;
  cod_lista_precios_cabecera?: number;
  cod_cuenta_contable_interes?: number;
  cod_cliente_predeterminado?: number;
  usa_cod_compatibilidad_lp?: string;
  usa_plugin_mayorista?: string;
  cod_lista_mayorista?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof webservice {
    webservice.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    activo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    client_id: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    client_secret: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    user_name: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    grant_type: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "password"
    },
    post_url: {
      type: DataTypes.CHAR(250),
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    sincroniza_automatico: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    sincronizacion_estatica: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    fecha_sinc_automatica: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_sinc_automatica: {
      type: DataTypes.TIME,
      allowNull: true
    },
    intervalo_hora_sinc_auto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ultima_fecha_sinc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ultima_hora_sinc: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mostrar_advertencia: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    observaciones: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 1
    },
    cod_cuenta_contable_envios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito_cabecera: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lista_precios_cabecera: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta_contable_interes: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cliente_predeterminado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usa_cod_compatibilidad_lp: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    usa_plugin_mayorista: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_lista_mayorista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'webservice',
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
  return webservice;
  }
}
