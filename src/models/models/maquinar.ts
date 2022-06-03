import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface maquinarAttributes {
  codigo?: number;
  descrip?: string;
  id: number;
  empresa?: number;
  tipo?: string;
  hs_km_iniciales?: number;
  unidad_medida?: string;
  codexterno?: string;
}

export type maquinarPk = "id";
export type maquinarId = maquinar[maquinarPk];
export type maquinarCreationAttributes = Optional<maquinarAttributes, maquinarPk>;

export class maquinar extends Model<maquinarAttributes, maquinarCreationAttributes> implements maquinarAttributes {
  codigo?: number;
  descrip?: string;
  id!: number;
  empresa?: number;
  tipo?: string;
  hs_km_iniciales?: number;
  unidad_medida?: string;
  codexterno?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof maquinar {
    maquinar.init({
    codigo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    empresa: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    hs_km_iniciales: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    codexterno: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'maquinar',
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
  return maquinar;
  }
}
