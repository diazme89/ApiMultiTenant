import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_empresas_serviciosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;
}

export type tt_empresas_serviciosPk = "id";
export type tt_empresas_serviciosId = tt_empresas_servicios[tt_empresas_serviciosPk];
export type tt_empresas_serviciosCreationAttributes = Optional<tt_empresas_serviciosAttributes, tt_empresas_serviciosPk>;

export class tt_empresas_servicios extends Model<tt_empresas_serviciosAttributes, tt_empresas_serviciosCreationAttributes> implements tt_empresas_serviciosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_empresas_servicios {
    tt_empresas_servicios.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_empresas_servicios',
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
  return tt_empresas_servicios;
  }
}
