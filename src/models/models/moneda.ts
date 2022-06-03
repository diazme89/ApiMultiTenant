import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface monedaAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  codigo2?: string;
  cod_afip?: string;
  codigo3?: string;
}

export type monedaPk = "id";
export type monedaId = moneda[monedaPk];
export type monedaCreationAttributes = Optional<monedaAttributes, monedaPk>;

export class moneda extends Model<monedaAttributes, monedaCreationAttributes> implements monedaAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  codigo2?: string;
  cod_afip?: string;
  codigo3?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof moneda {
    moneda.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    codigo2: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    cod_afip: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    codigo3: {
      type: DataTypes.CHAR(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moneda',
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
  return moneda;
  }
}
