import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_mov_perAttributes {
  fecha1?: string;
  fecha2?: string;
  empleado?: number;
  area?: number;
  lote?: number;
  tarea?: number;
  maquinaria?: number;
  id: number;
  usuario?: string;
  tipo?: string;
  insumo?: string;
  concepto?: number;
  propia?: string;
}

export type filtro_mov_perPk = "id";
export type filtro_mov_perId = filtro_mov_per[filtro_mov_perPk];
export type filtro_mov_perCreationAttributes = Optional<filtro_mov_perAttributes, filtro_mov_perPk>;

export class filtro_mov_per extends Model<filtro_mov_perAttributes, filtro_mov_perCreationAttributes> implements filtro_mov_perAttributes {
  fecha1?: string;
  fecha2?: string;
  empleado?: number;
  area?: number;
  lote?: number;
  tarea?: number;
  maquinaria?: number;
  id!: number;
  usuario?: string;
  tipo?: string;
  insumo?: string;
  concepto?: number;
  propia?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_mov_per {
    filtro_mov_per.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empleado: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    tarea: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    maquinaria: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    insumo: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    concepto: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    propia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_mov_per',
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
  return filtro_mov_per;
  }
}
