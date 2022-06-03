import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_inventarioAttributes {
  id: number;
  codigo?: number;
  ajustes?: number;
  negativos?: number;
  transito?: number;
  labores?: number;
  unidades?: number;
  existencia_transito?: number;
  existencia?: number;
  cod_deposito?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_inventarioPk = "id";
export type tt_inventarioId = tt_inventario[tt_inventarioPk];
export type tt_inventarioCreationAttributes = Optional<tt_inventarioAttributes, tt_inventarioPk>;

export class tt_inventario extends Model<tt_inventarioAttributes, tt_inventarioCreationAttributes> implements tt_inventarioAttributes {
  id!: number;
  codigo?: number;
  ajustes?: number;
  negativos?: number;
  transito?: number;
  labores?: number;
  unidades?: number;
  existencia_transito?: number;
  existencia?: number;
  cod_deposito?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_inventario {
    tt_inventario.init({
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
    ajustes: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    negativos: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    transito: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    labores: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    unidades: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    existencia_transito: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cod_deposito: {
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
    tableName: 'tt_inventario',
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
  return tt_inventario;
  }
}
