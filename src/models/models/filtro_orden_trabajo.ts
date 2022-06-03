import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_orden_trabajoAttributes {
  fecha1?: string;
  fecha2?: string;
  area?: number;
  lote?: number;
  tarea?: number;
  propia?: string;
  contratista?: number;
  id: number;
  usuario?: string;
  tipo?: string;
  cod_insumo?: number;
  cod_empleado?: number;
  cod_maquina?: number;
  finca?: string;
}

export type filtro_orden_trabajoPk = "id";
export type filtro_orden_trabajoId = filtro_orden_trabajo[filtro_orden_trabajoPk];
export type filtro_orden_trabajoCreationAttributes = Optional<filtro_orden_trabajoAttributes, filtro_orden_trabajoPk>;

export class filtro_orden_trabajo extends Model<filtro_orden_trabajoAttributes, filtro_orden_trabajoCreationAttributes> implements filtro_orden_trabajoAttributes {
  fecha1?: string;
  fecha2?: string;
  area?: number;
  lote?: number;
  tarea?: number;
  propia?: string;
  contratista?: number;
  id!: number;
  usuario?: string;
  tipo?: string;
  cod_insumo?: number;
  cod_empleado?: number;
  cod_maquina?: number;
  finca?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_orden_trabajo {
    filtro_orden_trabajo.init({
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
      type: DataTypes.DECIMAL(8,0),
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
    cod_insumo: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_empleado: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_maquina: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    finca: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_orden_trabajo',
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
  return filtro_orden_trabajo;
  }
}
