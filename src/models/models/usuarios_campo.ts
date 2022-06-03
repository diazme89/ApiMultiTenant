import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarios_campoAttributes {
  id: number;
  usuario: string;
  clave?: string;
  synagro_abrir?: string;
  synagro_internet?: string;
  synagro_varios?: string;
  synagro_multiusuario?: string;
  plane_archivos?: string;
  plane_movimientos?: string;
  plane_consultas?: string;
  plane_borrar_mov?: string;
  datos_archivos?: string;
  datos_movimientos?: string;
  datos_consultas?: string;
  datos_borrar_mov?: string;
  gestion_archivos?: string;
  gestion_movimientos?: string;
  gestion_consultas?: string;
  gestion_borrar_mov?: string;
}

export type usuarios_campoPk = "id";
export type usuarios_campoId = usuarios_campo[usuarios_campoPk];
export type usuarios_campoCreationAttributes = Optional<usuarios_campoAttributes, usuarios_campoPk>;

export class usuarios_campo extends Model<usuarios_campoAttributes, usuarios_campoCreationAttributes> implements usuarios_campoAttributes {
  id!: number;
  usuario!: string;
  clave?: string;
  synagro_abrir?: string;
  synagro_internet?: string;
  synagro_varios?: string;
  synagro_multiusuario?: string;
  plane_archivos?: string;
  plane_movimientos?: string;
  plane_consultas?: string;
  plane_borrar_mov?: string;
  datos_archivos?: string;
  datos_movimientos?: string;
  datos_consultas?: string;
  datos_borrar_mov?: string;
  gestion_archivos?: string;
  gestion_movimientos?: string;
  gestion_consultas?: string;
  gestion_borrar_mov?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios_campo {
    usuarios_campo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    clave: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    synagro_abrir: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    synagro_internet: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    synagro_varios: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    synagro_multiusuario: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    plane_archivos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    plane_movimientos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    plane_consultas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    plane_borrar_mov: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    datos_archivos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    datos_movimientos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    datos_consultas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    datos_borrar_mov: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gestion_archivos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gestion_movimientos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gestion_consultas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gestion_borrar_mov: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios_campo',
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
  return usuarios_campo;
  }
}
