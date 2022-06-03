import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface puntos_de_venta_usuariosAttributes {
  id: number;
  id_usuario?: number;
  id_punto_de_venta?: number;
  predefinido?: string;
}

export type puntos_de_venta_usuariosPk = "id";
export type puntos_de_venta_usuariosId = puntos_de_venta_usuarios[puntos_de_venta_usuariosPk];
export type puntos_de_venta_usuariosCreationAttributes = Optional<puntos_de_venta_usuariosAttributes, puntos_de_venta_usuariosPk>;

export class puntos_de_venta_usuarios extends Model<puntos_de_venta_usuariosAttributes, puntos_de_venta_usuariosCreationAttributes> implements puntos_de_venta_usuariosAttributes {
  id!: number;
  id_usuario?: number;
  id_punto_de_venta?: number;
  predefinido?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof puntos_de_venta_usuarios {
    puntos_de_venta_usuarios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_punto_de_venta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    predefinido: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'puntos_de_venta_usuarios',
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
  return puntos_de_venta_usuarios;
  }
}
