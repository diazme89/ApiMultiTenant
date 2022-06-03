import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface establecimientoAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  obsevacion?: string;
  categoria?: number;
  cod_deposito?: number;
  direccion?: string;
  localidad?: string;
  provincia?: string;
}

export type establecimientoPk = "id";
export type establecimientoId = establecimiento[establecimientoPk];
export type establecimientoCreationAttributes = Optional<establecimientoAttributes, establecimientoPk>;

export class establecimiento extends Model<establecimientoAttributes, establecimientoCreationAttributes> implements establecimientoAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  obsevacion?: string;
  categoria?: number;
  cod_deposito?: number;
  direccion?: string;
  localidad?: string;
  provincia?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof establecimiento {
    establecimiento.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true,
      unique: "establecimientoxkey1"
    },
    nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    obsevacion: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    direccion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'establecimiento',
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
        name: "establecimientoxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return establecimiento;
  }
}
