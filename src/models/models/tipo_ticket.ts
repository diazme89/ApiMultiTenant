import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipo_ticketAttributes {
  id: number;
  ticket?: string;
  tipo_documento?: number;
  descripcion?: string;
}

export type tipo_ticketPk = "id";
export type tipo_ticketId = tipo_ticket[tipo_ticketPk];
export type tipo_ticketCreationAttributes = Optional<tipo_ticketAttributes, tipo_ticketPk>;

export class tipo_ticket extends Model<tipo_ticketAttributes, tipo_ticketCreationAttributes> implements tipo_ticketAttributes {
  id!: number;
  ticket?: string;
  tipo_documento?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_ticket {
    tipo_ticket.init({
    id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ticket: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_ticket',
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
  return tipo_ticket;
  }
}
