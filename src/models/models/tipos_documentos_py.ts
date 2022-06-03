import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipos_documentos_pyAttributes {
  id: number;
  codigo: number;
  descripcion: string;
  codigo2?: number;
}

export type tipos_documentos_pyPk = "id";
export type tipos_documentos_pyId = tipos_documentos_py[tipos_documentos_pyPk];
export type tipos_documentos_pyCreationAttributes = Optional<tipos_documentos_pyAttributes, tipos_documentos_pyPk>;

export class tipos_documentos_py extends Model<tipos_documentos_pyAttributes, tipos_documentos_pyCreationAttributes> implements tipos_documentos_pyAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;
  codigo2?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipos_documentos_py {
    tipos_documentos_py.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    codigo2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipos_documentos_py',
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
  return tipos_documentos_py;
  }
}
