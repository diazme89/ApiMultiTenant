import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface planeamiento_lotesAttributes {
  codigo?: number;
  descrip?: string;
  superficie?: number;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  numero?: number;
  id: number;
  mano_obra?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_lote_actividad?: number;
  cod_establecimiento?: number;
  cod_periodo?: number;
}

export type planeamiento_lotesPk = "id";
export type planeamiento_lotesId = planeamiento_lotes[planeamiento_lotesPk];
export type planeamiento_lotesCreationAttributes = Optional<planeamiento_lotesAttributes, planeamiento_lotesPk>;

export class planeamiento_lotes extends Model<planeamiento_lotesAttributes, planeamiento_lotesCreationAttributes> implements planeamiento_lotesAttributes {
  codigo?: number;
  descrip?: string;
  superficie?: number;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  numero?: number;
  id!: number;
  mano_obra?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_lote_actividad?: number;
  cod_establecimiento?: number;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof planeamiento_lotes {
    planeamiento_lotes.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    cultivo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    rendimient: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    gast_comer: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    cuota_amor: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    mano_obra: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    cod_lote: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_lote_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'planeamiento_lotes',
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
  return planeamiento_lotes;
  }
}
