import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface chequerasAttributes {
  id: number;
  denominacion?: string;
  numero_inicial?: number;
  numero_final?: number;
  tipo?: string;
  observaciones?: string;
  cod_cuenta?: number;
}

export type chequerasPk = "id";
export type chequerasId = chequeras[chequerasPk];
export type chequerasCreationAttributes = Optional<chequerasAttributes, chequerasPk>;

export class chequeras extends Model<chequerasAttributes, chequerasCreationAttributes> implements chequerasAttributes {
  id!: number;
  denominacion?: string;
  numero_inicial?: number;
  numero_final?: number;
  tipo?: string;
  observaciones?: string;
  cod_cuenta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof chequeras {
    chequeras.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    denominacion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    numero_inicial: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_final: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chequeras',
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
  return chequeras;
  }
}
