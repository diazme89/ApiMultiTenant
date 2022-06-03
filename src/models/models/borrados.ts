import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface borradosAttributes {
  id: number;
  tabla?: string;
  id_registro?: number;
  usuario?: string;
  fecha_borrado?: string;
  hora_borrado?: string;
  id_pc?: number;
}

export type borradosPk = "id";
export type borradosId = borrados[borradosPk];
export type borradosCreationAttributes = Optional<borradosAttributes, borradosPk>;

export class borrados extends Model<borradosAttributes, borradosCreationAttributes> implements borradosAttributes {
  id!: number;
  tabla?: string;
  id_registro?: number;
  usuario?: string;
  fecha_borrado?: string;
  hora_borrado?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof borrados {
    borrados.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    tabla: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    id_registro: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_borrado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_borrado: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'borrados',
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
  return borrados;
  }
}
