import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_articulosAttributes {
  id: number;
  codigo?: number;
  marca?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_articulosPk = "id";
export type tt_articulosId = tt_articulos[tt_articulosPk];
export type tt_articulosCreationAttributes = Optional<tt_articulosAttributes, tt_articulosPk>;

export class tt_articulos extends Model<tt_articulosAttributes, tt_articulosCreationAttributes> implements tt_articulosAttributes {
  id!: number;
  codigo?: number;
  marca?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_articulos {
    tt_articulos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    marca: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_articulos',
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
        name: "tt_articulos_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
      {
        name: "tt_articulos_idx_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_articulos;
  }
}
