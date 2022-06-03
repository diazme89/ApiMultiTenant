import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface promocionesAttributes {
  id: number;
  cod_promocion?: number;
  nombre_promocion?: string;
  habilitada?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  cod_empresa?: number;
  grupo?: string;
  sum_art_fac?: string;
  tipo_promocion?: string;
  cod_lista_precios?: number;
  art_desc?: string;
}

export type promocionesPk = "id";
export type promocionesId = promociones[promocionesPk];
export type promocionesCreationAttributes = Optional<promocionesAttributes, promocionesPk>;

export class promociones extends Model<promocionesAttributes, promocionesCreationAttributes> implements promocionesAttributes {
  id!: number;
  cod_promocion?: number;
  nombre_promocion?: string;
  habilitada?: string;
  fecha_desde?: string;
  fecha_hasta?: string;
  cod_empresa?: number;
  grupo?: string;
  sum_art_fac?: string;
  tipo_promocion?: string;
  cod_lista_precios?: number;
  art_desc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof promociones {
    promociones.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_promocion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre_promocion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    habilitada: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    sum_art_fac: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    tipo_promocion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_lista_precios: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    art_desc: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'promociones',
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
  return promociones;
  }
}
