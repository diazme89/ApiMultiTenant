import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface clientes_acuerdosAttributes {
  id: number;
  cod_cliente?: number;
  fecha_desde?: string;
  fecha_hasta?: string;
  valor?: number;
}

export type clientes_acuerdosPk = "id";
export type clientes_acuerdosId = clientes_acuerdos[clientes_acuerdosPk];
export type clientes_acuerdosCreationAttributes = Optional<clientes_acuerdosAttributes, clientes_acuerdosPk>;

export class clientes_acuerdos extends Model<clientes_acuerdosAttributes, clientes_acuerdosCreationAttributes> implements clientes_acuerdosAttributes {
  id!: number;
  cod_cliente?: number;
  fecha_desde?: string;
  fecha_hasta?: string;
  valor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof clientes_acuerdos {
    clientes_acuerdos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes_acuerdos',
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
        name: "clientes_acuerdos_xkey1",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return clientes_acuerdos;
  }
}
