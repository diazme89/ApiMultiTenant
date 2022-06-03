import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarios_permisosAttributes {
  id: number;
  usuario?: string;
  menu?: string;
  permiso?: string;
  nombre?: string;
}

export type usuarios_permisosPk = "id";
export type usuarios_permisosId = usuarios_permisos[usuarios_permisosPk];
export type usuarios_permisosCreationAttributes = Optional<usuarios_permisosAttributes, usuarios_permisosPk>;

export class usuarios_permisos extends Model<usuarios_permisosAttributes, usuarios_permisosCreationAttributes> implements usuarios_permisosAttributes {
  id!: number;
  usuario?: string;
  menu?: string;
  permiso?: string;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios_permisos {
    usuarios_permisos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    menu: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    permiso: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios_permisos',
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
  return usuarios_permisos;
  }
}
