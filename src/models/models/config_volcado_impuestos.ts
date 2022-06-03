import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface config_volcado_impuestosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  cod_impuesto?: number;
  ignorar_lineas?: number;
  separador_adjunto?: string;
  comienzo_linea?: string;
  final_linea?: string;
  cantidad_campos?: number;
  archivo_path?: string;
  usa_separador_campos?: string;
  separador_campos?: string;
  cuit?: number;
  cuit_hasta?: number;
  categoria?: number;
  categoria_hasta?: number;
  fecha?: number;
  fecha_hasta?: number;
  alicuota?: number;
  alicuota_hasta?: number;
  alicuota_castigo?: number;
}

export type config_volcado_impuestosPk = "id";
export type config_volcado_impuestosId = config_volcado_impuestos[config_volcado_impuestosPk];
export type config_volcado_impuestosCreationAttributes = Optional<config_volcado_impuestosAttributes, config_volcado_impuestosPk>;

export class config_volcado_impuestos extends Model<config_volcado_impuestosAttributes, config_volcado_impuestosCreationAttributes> implements config_volcado_impuestosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  cod_impuesto?: number;
  ignorar_lineas?: number;
  separador_adjunto?: string;
  comienzo_linea?: string;
  final_linea?: string;
  cantidad_campos?: number;
  archivo_path?: string;
  usa_separador_campos?: string;
  separador_campos?: string;
  cuit?: number;
  cuit_hasta?: number;
  categoria?: number;
  categoria_hasta?: number;
  fecha?: number;
  fecha_hasta?: number;
  alicuota?: number;
  alicuota_hasta?: number;
  alicuota_castigo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof config_volcado_impuestos {
    config_volcado_impuestos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cod_impuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ignorar_lineas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    separador_adjunto: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    comienzo_linea: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    final_linea: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cantidad_campos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    archivo_path: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    usa_separador_campos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    separador_campos: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cuit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuit_hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    categoria_hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota_hasta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota_castigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_volcado_impuestos',
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
  return config_volcado_impuestos;
  }
}
