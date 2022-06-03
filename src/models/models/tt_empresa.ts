import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_empresaAttributes {
  id: number;
  idproc?: number;
  id_empresa: number;
  cod_empresa?: number;
  nombre?: string;
  empresa_activa?: number;
  empresa_consolid?: number;
  fecha_alta?: Date;
  nombre_1?: string;
}

export type tt_empresaPk = "id";
export type tt_empresaId = tt_empresa[tt_empresaPk];
export type tt_empresaCreationAttributes = Optional<tt_empresaAttributes, tt_empresaPk>;

export class tt_empresa extends Model<tt_empresaAttributes, tt_empresaCreationAttributes> implements tt_empresaAttributes {
  id!: number;
  idproc?: number;
  id_empresa!: number;
  cod_empresa?: number;
  nombre?: string;
  empresa_activa?: number;
  empresa_consolid?: number;
  fecha_alta?: Date;
  nombre_1?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_empresa {
    tt_empresa.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    empresa_activa: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    empresa_consolid: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    nombre_1: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_empresa',
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
        name: "tt_empresa_xidproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_empresa" },
          { name: "empresa_consolid" },
        ]
      },
    ]
  });
  return tt_empresa;
  }
}
