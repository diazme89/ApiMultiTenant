import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_cert_depositoAttributes {
  id: number;
  id_comprobante: number;
  id_cert_deposito: number;
  peso: number;
}

export type ventas_cert_depositoPk = "id";
export type ventas_cert_depositoId = ventas_cert_deposito[ventas_cert_depositoPk];
export type ventas_cert_depositoCreationAttributes = Optional<ventas_cert_depositoAttributes, ventas_cert_depositoPk>;

export class ventas_cert_deposito extends Model<ventas_cert_depositoAttributes, ventas_cert_depositoCreationAttributes> implements ventas_cert_depositoAttributes {
  id!: number;
  id_comprobante!: number;
  id_cert_deposito!: number;
  peso!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_cert_deposito {
    ventas_cert_deposito.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_cert_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    peso: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ventas_cert_deposito',
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
        name: "ventas_certif_deposito_key1",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return ventas_cert_deposito;
  }
}
