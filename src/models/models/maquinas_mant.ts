import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface maquinas_mantAttributes {
  id: number;
  id_maquina: number;
  mantenimiento?: string;
  horas?: number;
  horas_aviso?: number;
  kilometros?: number;
  kilometros_aviso?: number;
  hs_km_iniciales?: number;
}

export type maquinas_mantPk = "id";
export type maquinas_mantId = maquinas_mant[maquinas_mantPk];
export type maquinas_mantCreationAttributes = Optional<maquinas_mantAttributes, maquinas_mantPk>;

export class maquinas_mant extends Model<maquinas_mantAttributes, maquinas_mantCreationAttributes> implements maquinas_mantAttributes {
  id!: number;
  id_maquina!: number;
  mantenimiento?: string;
  horas?: number;
  horas_aviso?: number;
  kilometros?: number;
  kilometros_aviso?: number;
  hs_km_iniciales?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof maquinas_mant {
    maquinas_mant.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_maquina: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "maquinas_mantxkey1"
    },
    mantenimiento: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    horas: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    horas_aviso: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    kilometros: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    kilometros_aviso: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    hs_km_iniciales: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'maquinas_mant',
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
        name: "maquinas_mantxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_maquina" },
        ]
      },
    ]
  });
  return maquinas_mant;
  }
}
