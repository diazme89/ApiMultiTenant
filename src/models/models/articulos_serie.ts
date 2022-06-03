import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_serieAttributes {
  id: number;
  cod_articulo: number;
  nro_serie: string;
  nro_lote: string;
  observacion?: string;
  fecha_alta?: string;
}

export type articulos_seriePk = "id";
export type articulos_serieId = articulos_serie[articulos_seriePk];
export type articulos_serieCreationAttributes = Optional<articulos_serieAttributes, articulos_seriePk>;

export class articulos_serie extends Model<articulos_serieAttributes, articulos_serieCreationAttributes> implements articulos_serieAttributes {
  id!: number;
  cod_articulo!: number;
  nro_serie!: string;
  nro_lote!: string;
  observacion?: string;
  fecha_alta?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_serie {
    articulos_serie.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    nro_serie: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    nro_lote: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    observacion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_serie',
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
  return articulos_serie;
  }
}
