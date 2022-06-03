import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface configuracion_libro_ivaAttributes {
  id: number;
  codigo?: number;
  columna?: string;
  descripcion?: string;
  circuito?: string;
  cod_cuenta_contable?: number;
  modo?: string;
}

export type configuracion_libro_ivaPk = "id";
export type configuracion_libro_ivaId = configuracion_libro_iva[configuracion_libro_ivaPk];
export type configuracion_libro_ivaCreationAttributes = Optional<configuracion_libro_ivaAttributes, configuracion_libro_ivaPk>;

export class configuracion_libro_iva extends Model<configuracion_libro_ivaAttributes, configuracion_libro_ivaCreationAttributes> implements configuracion_libro_ivaAttributes {
  id!: number;
  codigo?: number;
  columna?: string;
  descripcion?: string;
  circuito?: string;
  cod_cuenta_contable?: number;
  modo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof configuracion_libro_iva {
    configuracion_libro_iva.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    columna: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_cuenta_contable: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    modo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "L"
    }
  }, {
    sequelize,
    tableName: 'configuracion_libro_iva',
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
  return configuracion_libro_iva;
  }
}
