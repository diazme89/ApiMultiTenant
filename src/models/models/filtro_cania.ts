import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_caniaAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id: number;
  mecanizada?: string;
  usuario?: string;
  area?: number;
  variedad?: string;
}

export type filtro_caniaPk = "id";
export type filtro_caniaId = filtro_cania[filtro_caniaPk];
export type filtro_caniaCreationAttributes = Optional<filtro_caniaAttributes, filtro_caniaPk>;

export class filtro_cania extends Model<filtro_caniaAttributes, filtro_caniaCreationAttributes> implements filtro_caniaAttributes {
  fecha1?: string;
  fecha2?: string;
  lote?: number;
  transporte?: number;
  destino?: number;
  id!: number;
  mecanizada?: string;
  usuario?: string;
  area?: number;
  variedad?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_cania {
    filtro_cania.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lote: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    transporte: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    mecanizada: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_cania',
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
  return filtro_cania;
  }
}
