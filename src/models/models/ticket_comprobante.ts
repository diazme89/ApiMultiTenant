import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ticket_comprobanteAttributes {
  id: number;
  id_comprobante?: number;
  id_ticket?: number;
  cod_afip?: string;
  inicial_libro_iva?: string;
}

export type ticket_comprobantePk = "id";
export type ticket_comprobanteId = ticket_comprobante[ticket_comprobantePk];
export type ticket_comprobanteCreationAttributes = Optional<ticket_comprobanteAttributes, ticket_comprobantePk>;

export class ticket_comprobante extends Model<ticket_comprobanteAttributes, ticket_comprobanteCreationAttributes> implements ticket_comprobanteAttributes {
  id!: number;
  id_comprobante?: number;
  id_ticket?: number;
  cod_afip?: string;
  inicial_libro_iva?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ticket_comprobante {
    ticket_comprobante.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_ticket: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_afip: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    inicial_libro_iva: {
      type: DataTypes.CHAR(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ticket_comprobante',
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
  return ticket_comprobante;
  }
}
