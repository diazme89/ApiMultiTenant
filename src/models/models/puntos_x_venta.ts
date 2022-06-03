import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_x_ventaAttributes {
  id: number;
  cod_punto?: number;
  id_comprobante?: number;
  tipo_comprobante?: string;
  puntos_comprobante?: number;
  fecha?: string;
  cod_cliente?: number;
}

export type puntos_x_ventaPk = "id";
export type puntos_x_ventaId = puntos_x_venta[puntos_x_ventaPk];
export type puntos_x_ventaCreationAttributes = Optional<puntos_x_ventaAttributes, puntos_x_ventaPk>;

export class puntos_x_venta extends Model<puntos_x_ventaAttributes, puntos_x_ventaCreationAttributes> implements puntos_x_ventaAttributes {
  id!: number;
  cod_punto?: number;
  id_comprobante?: number;
  tipo_comprobante?: string;
  puntos_comprobante?: number;
  fecha?: string;
  cod_cliente?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_x_venta {
    puntos_x_venta.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_punto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    puntos_comprobante: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_x_venta',
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
  return puntos_x_venta;
  }
}
