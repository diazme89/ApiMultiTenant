import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface im_usuariosAttributes {
  id: number;
  usuario?: string;
  clave?: string;
  cod_cliente?: number;
  habilitado?: string;
}

export type im_usuariosPk = "id";
export type im_usuariosId = im_usuarios[im_usuariosPk];
export type im_usuariosCreationAttributes = Optional<im_usuariosAttributes, im_usuariosPk>;

export class im_usuarios extends Model<im_usuariosAttributes, im_usuariosCreationAttributes> implements im_usuariosAttributes {
  id!: number;
  usuario?: string;
  clave?: string;
  cod_cliente?: number;
  habilitado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof im_usuarios {
    im_usuarios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    clave: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'im_usuarios',
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
        name: "im_usuarios_key",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
  return im_usuarios;
  }
}
