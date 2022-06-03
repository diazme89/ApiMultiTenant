import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cotizacionAttributes {
  id: number;
  fecha?: string;
  valor?: number;
  id_moneda?: number;
  valor_compra?: number;
  valor_venta?: number;
}

export type cotizacionPk = "id";
export type cotizacionId = cotizacion[cotizacionPk];
export type cotizacionCreationAttributes = Optional<cotizacionAttributes, cotizacionPk>;

export class cotizacion extends Model<cotizacionAttributes, cotizacionCreationAttributes> implements cotizacionAttributes {
  id!: number;
  fecha?: string;
  valor?: number;
  id_moneda?: number;
  valor_compra?: number;
  valor_venta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cotizacion {
    cotizacion.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    id_moneda: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    valor_compra: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    valor_venta: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cotizacion',
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
      {
        name: "cotizacion_fecha_moneda",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_moneda" },
          { name: "fecha" },
        ]
      },
    ]
  });
  return cotizacion;
  }
}
