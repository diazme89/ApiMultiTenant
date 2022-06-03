import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_usuarios_seleccionAttributes {
  id: number;
  idproc?: number;
  id_usuario: number;
  usuario?: string;
  seleccion?: number;
}

export type tt_usuarios_seleccionPk = "id";
export type tt_usuarios_seleccionId = tt_usuarios_seleccion[tt_usuarios_seleccionPk];
export type tt_usuarios_seleccionCreationAttributes = Optional<tt_usuarios_seleccionAttributes, tt_usuarios_seleccionPk>;

export class tt_usuarios_seleccion extends Model<tt_usuarios_seleccionAttributes, tt_usuarios_seleccionCreationAttributes> implements tt_usuarios_seleccionAttributes {
  id!: number;
  idproc?: number;
  id_usuario!: number;
  usuario?: string;
  seleccion?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_usuarios_seleccion {
    tt_usuarios_seleccion.init({
    id: {
      type: DataTypes.DOUBLE(10,0),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    seleccion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_usuarios_seleccion',
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
  return tt_usuarios_seleccion;
  }
}
