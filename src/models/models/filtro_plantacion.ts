import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_plantacionAttributes {
  fecha1?: string;
  fecha2?: string;
  area?: number;
  lote?: number;
  tarea?: number;
  propia?: string;
  contratista?: number;
  id: number;
  usuario?: string;
}

export type filtro_plantacionPk = "id";
export type filtro_plantacionId = filtro_plantacion[filtro_plantacionPk];
export type filtro_plantacionCreationAttributes = Optional<filtro_plantacionAttributes, filtro_plantacionPk>;

export class filtro_plantacion extends Model<filtro_plantacionAttributes, filtro_plantacionCreationAttributes> implements filtro_plantacionAttributes {
  fecha1?: string;
  fecha2?: string;
  area?: number;
  lote?: number;
  tarea?: number;
  propia?: string;
  contratista?: number;
  id!: number;
  usuario?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_plantacion {
    filtro_plantacion.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
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
    propia: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    contratista: {
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
    }
  }, {
    sequelize,
    tableName: 'filtro_plantacion',
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
  return filtro_plantacion;
  }
}
