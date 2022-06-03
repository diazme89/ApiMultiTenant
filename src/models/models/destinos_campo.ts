import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface destinos_campoAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
}

export type destinos_campoPk = "id";
export type destinos_campoId = destinos_campo[destinos_campoPk];
export type destinos_campoCreationAttributes = Optional<destinos_campoAttributes, destinos_campoPk>;

export class destinos_campo extends Model<destinos_campoAttributes, destinos_campoCreationAttributes> implements destinos_campoAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof destinos_campo {
    destinos_campo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'destinos_campo',
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
  return destinos_campo;
  }
}
