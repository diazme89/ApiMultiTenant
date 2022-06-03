import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_remitosAttributes {
  id: number;
  id_compras?: number;
  remito_terminal?: number;
  remito_numero?: number;
}

export type compras_remitosPk = "id";
export type compras_remitosId = compras_remitos[compras_remitosPk];
export type compras_remitosCreationAttributes = Optional<compras_remitosAttributes, compras_remitosPk>;

export class compras_remitos extends Model<compras_remitosAttributes, compras_remitosCreationAttributes> implements compras_remitosAttributes {
  id!: number;
  id_compras?: number;
  remito_terminal?: number;
  remito_numero?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_remitos {
    compras_remitos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_compras: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    remito_terminal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    remito_numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_remitos',
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
  return compras_remitos;
  }
}
