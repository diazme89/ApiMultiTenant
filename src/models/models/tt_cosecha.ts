import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cosechaAttributes {
  id: number;
  cod_establecimiento?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_lote_actividad?: number;
  superficie?: number;
  kg_produccion?: number;
  prod_sup_gestion?: number;
  produccion_pla?: number;
  prod_sup_pla?: number;
  imagen?: string;
  origen?: string;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_cosechaPk = "id";
export type tt_cosechaId = tt_cosecha[tt_cosechaPk];
export type tt_cosechaCreationAttributes = Optional<tt_cosechaAttributes, tt_cosechaPk>;

export class tt_cosecha extends Model<tt_cosechaAttributes, tt_cosechaCreationAttributes> implements tt_cosechaAttributes {
  id!: number;
  cod_establecimiento?: number;
  cod_lote?: number;
  cod_actividad?: number;
  cod_lote_actividad?: number;
  superficie?: number;
  kg_produccion?: number;
  prod_sup_gestion?: number;
  produccion_pla?: number;
  prod_sup_pla?: number;
  imagen?: string;
  origen?: string;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cosecha {
    tt_cosecha.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
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
    superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    kg_produccion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    prod_sup_gestion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    produccion_pla: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    prod_sup_pla: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    imagen: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    origen: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_cosecha',
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
        name: "tt_cosecha_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_cosecha;
  }
}
