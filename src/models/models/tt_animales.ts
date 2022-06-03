import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_animalesAttributes {
  id: number;
  codigo?: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  cod_categoria?: number;
  cod_grupo?: number;
  peso?: number;
  idproc?: number;
  estado?: number;
  fecha_alta?: Date;
}

export type tt_animalesPk = "id";
export type tt_animalesId = tt_animales[tt_animalesPk];
export type tt_animalesCreationAttributes = Optional<tt_animalesAttributes, tt_animalesPk>;

export class tt_animales extends Model<tt_animalesAttributes, tt_animalesCreationAttributes> implements tt_animalesAttributes {
  id!: number;
  codigo?: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  cod_categoria?: number;
  cod_grupo?: number;
  peso?: number;
  idproc?: number;
  estado?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_animales {
    tt_animales.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_animales',
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
        name: "tt_animalesxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
        ]
      },
      {
        name: "tt_animalesxkey2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_categoria" },
        ]
      },
      {
        name: "tt_animales_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_animales;
  }
}
