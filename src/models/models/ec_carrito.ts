import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_carritoAttributes {
  id: number;
  cod_cliente?: number;
  fecha?: string;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  observacion?: string;
  estado?: string;
}

export type ec_carritoPk = "id";
export type ec_carritoId = ec_carrito[ec_carritoPk];
export type ec_carritoCreationAttributes = Optional<ec_carritoAttributes, ec_carritoPk>;

export class ec_carrito extends Model<ec_carritoAttributes, ec_carritoCreationAttributes> implements ec_carritoAttributes {
  id!: number;
  cod_cliente?: number;
  fecha?: string;
  cod_articulo?: number;
  cantidad?: number;
  precio?: number;
  observacion?: string;
  estado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_carrito {
    ec_carrito.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: "Pendiente"
    }
  }, {
    sequelize,
    tableName: 'ec_carrito',
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
        name: "cod_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
      {
        name: "cod_articulo",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "fecha",
        using: "BTREE",
        fields: [
          { name: "fecha" },
        ]
      },
    ]
  });
  return ec_carrito;
  }
}
