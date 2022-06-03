import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_establecimientosAttributes {
  id: number;
  codigo?: number;
  nombre?: string;
  marca?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_establecimientosPk = "id";
export type tt_establecimientosId = tt_establecimientos[tt_establecimientosPk];
export type tt_establecimientosCreationAttributes = Optional<tt_establecimientosAttributes, tt_establecimientosPk>;

export class tt_establecimientos extends Model<tt_establecimientosAttributes, tt_establecimientosCreationAttributes> implements tt_establecimientosAttributes {
  id!: number;
  codigo?: number;
  nombre?: string;
  marca?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_establecimientos {
    tt_establecimientos.init({
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
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
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
    tableName: 'tt_establecimientos',
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
        name: "tt_establecimientosxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
          { name: "marca" },
        ]
      },
    ]
  });
  return tt_establecimientos;
  }
}
