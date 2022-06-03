import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface maquinas_mant_tareasAttributes {
  id: number;
  id_maq_mant: number;
  descripcion?: string;
}

export type maquinas_mant_tareasPk = "id";
export type maquinas_mant_tareasId = maquinas_mant_tareas[maquinas_mant_tareasPk];
export type maquinas_mant_tareasCreationAttributes = Optional<maquinas_mant_tareasAttributes, maquinas_mant_tareasPk>;

export class maquinas_mant_tareas extends Model<maquinas_mant_tareasAttributes, maquinas_mant_tareasCreationAttributes> implements maquinas_mant_tareasAttributes {
  id!: number;
  id_maq_mant!: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof maquinas_mant_tareas {
    maquinas_mant_tareas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_maq_mant: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'maquinas_mant_tareas',
    timestamps: false
  });
  return maquinas_mant_tareas;
  }
}
