import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_laboresAttributes {
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
  cod_concepto?: number;
  cod_empresa?: number;
  parte_num_1?: number;
  parte_num_2?: number;
  cod_deposito_1?: number;
  fecha_carga_desde?: string;
  fecha_carga_hasta?: string;
}

export type filtro_laboresPk = "id";
export type filtro_laboresId = filtro_labores[filtro_laboresPk];
export type filtro_laboresCreationAttributes = Optional<filtro_laboresAttributes, filtro_laboresPk>;

export class filtro_labores extends Model<filtro_laboresAttributes, filtro_laboresCreationAttributes> implements filtro_laboresAttributes {
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
  cod_concepto?: number;
  cod_empresa?: number;
  parte_num_1?: number;
  parte_num_2?: number;
  cod_deposito_1?: number;
  fecha_carga_desde?: string;
  fecha_carga_hasta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_labores {
    filtro_labores.init({
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
      type: DataTypes.DECIMAL(8,0),
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
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    cod_concepto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    parte_num_1: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    parte_num_2: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_deposito_1: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    fecha_carga_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_carga_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_labores',
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
  return filtro_labores;
  }
}
