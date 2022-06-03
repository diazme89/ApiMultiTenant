import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_caracteristicasAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
  orden?: number;
  agrupado?: string;
  mostrar_descripcion?: string;
  seleccion?: string;
}

export type articulos_caracteristicasPk = "id";
export type articulos_caracteristicasId = articulos_caracteristicas[articulos_caracteristicasPk];
export type articulos_caracteristicasCreationAttributes = Optional<articulos_caracteristicasAttributes, articulos_caracteristicasPk>;

export class articulos_caracteristicas extends Model<articulos_caracteristicasAttributes, articulos_caracteristicasCreationAttributes> implements articulos_caracteristicasAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;
  orden?: number;
  agrupado?: string;
  mostrar_descripcion?: string;
  seleccion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_caracteristicas {
    articulos_caracteristicas.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    agrupado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    mostrar_descripcion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    seleccion: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'articulos_caracteristicas',
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
  return articulos_caracteristicas;
  }
}
