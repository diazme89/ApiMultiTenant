import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface webservice_afipAttributes {
  id: number;
  cod_empresa?: number;
  cod_metodo?: number;
  metodo?: string;
  ultimo_ticket_acceso?: any;
}

export type webservice_afipPk = "id";
export type webservice_afipId = webservice_afip[webservice_afipPk];
export type webservice_afipCreationAttributes = Optional<webservice_afipAttributes, webservice_afipPk>;

export class webservice_afip extends Model<webservice_afipAttributes, webservice_afipCreationAttributes> implements webservice_afipAttributes {
  id!: number;
  cod_empresa?: number;
  cod_metodo?: number;
  metodo?: string;
  ultimo_ticket_acceso?: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof webservice_afip {
    webservice_afip.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_metodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    metodo: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    ultimo_ticket_acceso: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'webservice_afip',
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
  return webservice_afip;
  }
}
