import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface remitos_campoAttributes {
  id: number;
  id_comprobante: number;
  punto_de_venta: number;
  numero: number;
  movimiento?: string;
}

export type remitos_campoPk = "id";
export type remitos_campoId = remitos_campo[remitos_campoPk];
export type remitos_campoCreationAttributes = Optional<remitos_campoAttributes, remitos_campoPk>;

export class remitos_campo extends Model<remitos_campoAttributes, remitos_campoCreationAttributes> implements remitos_campoAttributes {
  id!: number;
  id_comprobante!: number;
  punto_de_venta!: number;
  numero!: number;
  movimiento?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof remitos_campo {
    remitos_campo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    movimiento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'remitos_campo',
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
  return remitos_campo;
  }
}
