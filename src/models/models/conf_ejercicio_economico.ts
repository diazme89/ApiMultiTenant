import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface conf_ejercicio_economicoAttributes {
  id: number;
  inicio: string;
  fin: string;
  ejercicio_activo: string;
  descripcion?: string;
}

export type conf_ejercicio_economicoPk = "id";
export type conf_ejercicio_economicoId = conf_ejercicio_economico[conf_ejercicio_economicoPk];
export type conf_ejercicio_economicoCreationAttributes = Optional<conf_ejercicio_economicoAttributes, conf_ejercicio_economicoPk>;

export class conf_ejercicio_economico extends Model<conf_ejercicio_economicoAttributes, conf_ejercicio_economicoCreationAttributes> implements conf_ejercicio_economicoAttributes {
  id!: number;
  inicio!: string;
  fin!: string;
  ejercicio_activo!: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof conf_ejercicio_economico {
    conf_ejercicio_economico.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ejercicio_activo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conf_ejercicio_economico',
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
        name: "conf_ejercicio_economico_inicio_fin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inicio" },
          { name: "fin" },
        ]
      },
    ]
  });
  return conf_ejercicio_economico;
  }
}
