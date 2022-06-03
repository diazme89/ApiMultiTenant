import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_unidad_negocioAttributes {
  id: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;
}

export type tt_unidad_negocioPk = "id";
export type tt_unidad_negocioId = tt_unidad_negocio[tt_unidad_negocioPk];
export type tt_unidad_negocioCreationAttributes = Optional<tt_unidad_negocioAttributes, tt_unidad_negocioPk>;

export class tt_unidad_negocio extends Model<tt_unidad_negocioAttributes, tt_unidad_negocioCreationAttributes> implements tt_unidad_negocioAttributes {
  id!: number;
  codigo?: number;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_unidad_negocio {
    tt_unidad_negocio.init({
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
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_unidad_negocio',
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
        name: "tt_unidad_negocio_xkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
          { name: "marca" },
        ]
      },
    ]
  });
  return tt_unidad_negocio;
  }
}
