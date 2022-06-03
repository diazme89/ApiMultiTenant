import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_invganadero_auxAttributes {
  idproc: number;
  cod_categoria: number;
  descripcion: string;
  nro_cabezas?: number;
  peso_cab?: number;
  precio_kg?: number;
  peso_total?: number;
  importe_total?: number;
  fecha_alta?: Date;
}

export type tt_invganadero_auxPk = "idproc" | "cod_categoria";
export type tt_invganadero_auxId = tt_invganadero_aux[tt_invganadero_auxPk];
export type tt_invganadero_auxCreationAttributes = Optional<tt_invganadero_auxAttributes, tt_invganadero_auxPk>;

export class tt_invganadero_aux extends Model<tt_invganadero_auxAttributes, tt_invganadero_auxCreationAttributes> implements tt_invganadero_auxAttributes {
  idproc!: number;
  cod_categoria!: number;
  descripcion!: string;
  nro_cabezas?: number;
  peso_cab?: number;
  precio_kg?: number;
  peso_total?: number;
  importe_total?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_invganadero_aux {
    tt_invganadero_aux.init({
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
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
    tableName: 'tt_invganadero_aux',
    timestamps: false,
    indexes: [
      {
        name: "invganadero_aux_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_categoria" },
        ]
      },
    ]
  });
  return tt_invganadero_aux;
  }
}
