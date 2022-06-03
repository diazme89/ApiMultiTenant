import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actualizacion_dolarAttributes {
  id: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_auxiliar?: number;
}

export type actualizacion_dolarPk = "id";
export type actualizacion_dolarId = actualizacion_dolar[actualizacion_dolarPk];
export type actualizacion_dolarCreationAttributes = Optional<actualizacion_dolarAttributes, actualizacion_dolarPk>;

export class actualizacion_dolar extends Model<actualizacion_dolarAttributes, actualizacion_dolarCreationAttributes> implements actualizacion_dolarAttributes {
  id!: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_auxiliar?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof actualizacion_dolar {
    actualizacion_dolar.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    valor_auxiliar: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actualizacion_dolar',
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
        name: "actualizacion_dolar_aniomes",
        using: "BTREE",
        fields: [
          { name: "anio" },
          { name: "mes" },
        ]
      },
    ]
  });
  return actualizacion_dolar;
  }
}
