import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface l_margen_brutoAttributes {
  total1?: number;
  parcial1?: number;
  total2?: number;
  parcial2?: number;
  area?: number;
  descrip?: string;
  grupo?: number;
  id: number;
}

export type l_margen_brutoPk = "id";
export type l_margen_brutoId = l_margen_bruto[l_margen_brutoPk];
export type l_margen_brutoCreationAttributes = Optional<l_margen_brutoAttributes, l_margen_brutoPk>;

export class l_margen_bruto extends Model<l_margen_brutoAttributes, l_margen_brutoCreationAttributes> implements l_margen_brutoAttributes {
  total1?: number;
  parcial1?: number;
  total2?: number;
  parcial2?: number;
  area?: number;
  descrip?: string;
  grupo?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof l_margen_bruto {
    l_margen_bruto.init({
    total1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    parcial1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    total2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    parcial2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    grupo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'l_margen_bruto',
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
  return l_margen_bruto;
  }
}
