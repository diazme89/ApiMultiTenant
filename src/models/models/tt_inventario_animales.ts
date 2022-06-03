import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_inventario_animalesAttributes {
  id: number;
  cod_categoria?: number;
  nro_cabezas?: number;
  peso?: number;
  precio?: number;
  peso_total?: number;
  importe_total?: number;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_inventario_animalesPk = "id";
export type tt_inventario_animalesId = tt_inventario_animales[tt_inventario_animalesPk];
export type tt_inventario_animalesCreationAttributes = Optional<tt_inventario_animalesAttributes, tt_inventario_animalesPk>;

export class tt_inventario_animales extends Model<tt_inventario_animalesAttributes, tt_inventario_animalesCreationAttributes> implements tt_inventario_animalesAttributes {
  id!: number;
  cod_categoria?: number;
  nro_cabezas?: number;
  peso?: number;
  precio?: number;
  peso_total?: number;
  importe_total?: number;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_inventario_animales {
    tt_inventario_animales.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nro_cabezas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    peso_total: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    importe_total: {
      type: DataTypes.DECIMAL(18,5),
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
    tableName: 'tt_inventario_animales',
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
        name: "tt_inventario_animalesxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_categoria" },
        ]
      },
    ]
  });
  return tt_inventario_animales;
  }
}
