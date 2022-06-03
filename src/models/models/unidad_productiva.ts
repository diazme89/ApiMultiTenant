import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface unidad_productivaAttributes {
  id: number;
  codigo: number;
  descrip?: string;
  nro_certif?: string;
  fec_venc: string;
  limite_peso?: number;
  variedad?: string;
  cod_actividad: number;
  cod_periodo?: number;
}

export type unidad_productivaPk = "id";
export type unidad_productivaId = unidad_productiva[unidad_productivaPk];
export type unidad_productivaCreationAttributes = Optional<unidad_productivaAttributes, unidad_productivaPk>;

export class unidad_productiva extends Model<unidad_productivaAttributes, unidad_productivaCreationAttributes> implements unidad_productivaAttributes {
  id!: number;
  codigo!: number;
  descrip?: string;
  nro_certif?: string;
  fec_venc!: string;
  limite_peso?: number;
  variedad?: string;
  cod_actividad!: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof unidad_productiva {
    unidad_productiva.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descrip: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    nro_certif: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fec_venc: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    limite_peso: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    variedad: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad_productiva',
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
  return unidad_productiva;
  }
}
