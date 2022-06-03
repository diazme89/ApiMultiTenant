import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface movimientos_maquinariaAttributes {
  id: number;
  fecha?: string;
  id_cuenta?: number;
  importe?: number;
  proveedor?: string;
  observacion?: string;
  utas?: number;
  tipo?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type movimientos_maquinariaPk = "id";
export type movimientos_maquinariaId = movimientos_maquinaria[movimientos_maquinariaPk];
export type movimientos_maquinariaCreationAttributes = Optional<movimientos_maquinariaAttributes, movimientos_maquinariaPk>;

export class movimientos_maquinaria extends Model<movimientos_maquinariaAttributes, movimientos_maquinariaCreationAttributes> implements movimientos_maquinariaAttributes {
  id!: number;
  fecha?: string;
  id_cuenta?: number;
  importe?: number;
  proveedor?: string;
  observacion?: string;
  utas?: number;
  tipo?: string;
  usuario?: string;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof movimientos_maquinaria {
    movimientos_maquinaria.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    observacion: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    utas: {
      type: DataTypes.DECIMAL(9,1),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movimientos_maquinaria',
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
  return movimientos_maquinaria;
  }
}
