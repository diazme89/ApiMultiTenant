import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface permisosAttributes {
  id: number;
  usuario?: string;
  ventana?: string;
  nombre_ventana?: string;
  permiso?: string;
}

export type permisosPk = "id";
export type permisosId = permisos[permisosPk];
export type permisosCreationAttributes = Optional<permisosAttributes, permisosPk>;

export class permisos extends Model<permisosAttributes, permisosCreationAttributes> implements permisosAttributes {
  id!: number;
  usuario?: string;
  ventana?: string;
  nombre_ventana?: string;
  permiso?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof permisos {
    permisos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    ventana: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    nombre_ventana: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    permiso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'permisos',
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
  return permisos;
  }
}
