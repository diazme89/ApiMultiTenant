import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actualizacionAttributes {
  id: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_auxiliar?: number;
}

export type actualizacionPk = "id";
export type actualizacionId = actualizacion[actualizacionPk];
export type actualizacionCreationAttributes = Optional<actualizacionAttributes, actualizacionPk>;

export class actualizacion extends Model<actualizacionAttributes, actualizacionCreationAttributes> implements actualizacionAttributes {
  id!: number;
  anio?: number;
  mes?: number;
  valor?: number;
  valor_auxiliar?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof actualizacion {
    actualizacion.init({
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
    tableName: 'actualizacion',
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
        name: "actualizacionxkey1",
        using: "BTREE",
        fields: [
          { name: "anio" },
          { name: "mes" },
        ]
      },
    ]
  });
  return actualizacion;
  }
}
