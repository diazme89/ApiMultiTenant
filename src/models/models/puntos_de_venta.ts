import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_de_ventaAttributes {
  id: number;
  empresa?: number;
  id_comprobante_rel: number;
  id_destino: number;
  punto_de_venta: number;
  domicilio_fiscal: string;
  habilitado?: string;
  nro_cai?: number;
  vto_cai?: string;
  numero_inicial_comprobante?: number;
}

export type puntos_de_ventaPk = "id";
export type puntos_de_ventaId = puntos_de_venta[puntos_de_ventaPk];
export type puntos_de_ventaCreationAttributes = Optional<puntos_de_ventaAttributes, puntos_de_ventaPk>;

export class puntos_de_venta extends Model<puntos_de_ventaAttributes, puntos_de_ventaCreationAttributes> implements puntos_de_ventaAttributes {
  id!: number;
  empresa?: number;
  id_comprobante_rel!: number;
  id_destino!: number;
  punto_de_venta!: number;
  domicilio_fiscal!: string;
  habilitado?: string;
  nro_cai?: number;
  vto_cai?: string;
  numero_inicial_comprobante?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_de_venta {
    puntos_de_venta.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    id_comprobante_rel: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    domicilio_fiscal: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_cai: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    vto_cai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero_inicial_comprobante: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'puntos_de_venta',
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
  return puntos_de_venta;
  }
}
