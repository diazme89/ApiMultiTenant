import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface labores_maquinariasAttributes {
  id: number;
  id_labores: number;
  cod_empresa?: number;
  cod_maquina?: number;
  horas_maquina?: number;
  id_mantenimiento?: number;
  kilometraje?: number;
}

export type labores_maquinariasPk = "id";
export type labores_maquinariasId = labores_maquinarias[labores_maquinariasPk];
export type labores_maquinariasCreationAttributes = Optional<labores_maquinariasAttributes, labores_maquinariasPk>;

export class labores_maquinarias extends Model<labores_maquinariasAttributes, labores_maquinariasCreationAttributes> implements labores_maquinariasAttributes {
  id!: number;
  id_labores!: number;
  cod_empresa?: number;
  cod_maquina?: number;
  horas_maquina?: number;
  id_mantenimiento?: number;
  kilometraje?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores_maquinarias {
    labores_maquinarias.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    horas_maquina: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    id_mantenimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kilometraje: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labores_maquinarias',
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
        name: "labores_maquinariasxkey1",
        using: "BTREE",
        fields: [
          { name: "id_labores" },
        ]
      },
      {
        name: "labores_maquinariasxkey2",
        using: "BTREE",
        fields: [
          { name: "id_labores" },
          { name: "id_mantenimiento" },
        ]
      },
    ]
  });
  return labores_maquinarias;
  }
}
