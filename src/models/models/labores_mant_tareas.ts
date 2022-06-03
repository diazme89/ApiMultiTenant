import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface labores_mant_tareasAttributes {
  id: number;
  id_labores: number;
  descripcion?: string;
}

export type labores_mant_tareasPk = "id";
export type labores_mant_tareasId = labores_mant_tareas[labores_mant_tareasPk];
export type labores_mant_tareasCreationAttributes = Optional<labores_mant_tareasAttributes, labores_mant_tareasPk>;

export class labores_mant_tareas extends Model<labores_mant_tareasAttributes, labores_mant_tareasCreationAttributes> implements labores_mant_tareasAttributes {
  id!: number;
  id_labores!: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof labores_mant_tareas {
    labores_mant_tareas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_labores: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labores_mant_tareas',
    timestamps: false
  });
  return labores_mant_tareas;
  }
}
