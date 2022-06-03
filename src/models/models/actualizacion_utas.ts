import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actualizacion_utasAttributes {
  id: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_planeamiento?: number;
}

export type actualizacion_utasPk = "id";
export type actualizacion_utasId = actualizacion_utas[actualizacion_utasPk];
export type actualizacion_utasCreationAttributes = Optional<actualizacion_utasAttributes, actualizacion_utasPk>;

export class actualizacion_utas extends Model<actualizacion_utasAttributes, actualizacion_utasCreationAttributes> implements actualizacion_utasAttributes {
  id!: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_planeamiento?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof actualizacion_utas {
    actualizacion_utas.init({
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
    valor_planeamiento: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actualizacion_utas',
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
        name: "actualizacion_utasxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anio" },
          { name: "mes" },
        ]
      },
    ]
  });
  return actualizacion_utas;
  }
}
