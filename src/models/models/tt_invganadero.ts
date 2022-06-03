import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_invganaderoAttributes {
  cod_categoria: number;
  descripcion: string;
  nro_cabezas?: number;
  peso_cab?: number;
  precio_kg?: number;
  peso_total?: number;
  importe_total?: number;
  fecha_alta?: Date;
}

export type tt_invganaderoPk = "cod_categoria";
export type tt_invganaderoId = tt_invganadero[tt_invganaderoPk];
export type tt_invganaderoCreationAttributes = Optional<tt_invganaderoAttributes, tt_invganaderoPk>;

export class tt_invganadero extends Model<tt_invganaderoAttributes, tt_invganaderoCreationAttributes> implements tt_invganaderoAttributes {
  cod_categoria!: number;
  descripcion!: string;
  nro_cabezas?: number;
  peso_cab?: number;
  precio_kg?: number;
  peso_total?: number;
  importe_total?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_invganadero {
    tt_invganadero.init({
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    nro_cabezas: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    peso_cab: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    precio_kg: {
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
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_invganadero',
    timestamps: false,
    indexes: [
      {
        name: "invganadero_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_categoria" },
        ]
      },
    ]
  });
  return tt_invganadero;
  }
}
