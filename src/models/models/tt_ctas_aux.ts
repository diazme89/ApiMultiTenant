import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_ctas_auxAttributes {
  id: number;
  cod_cuenta?: number;
  cod_contabilidad?: number;
  cod_empresa?: number;
  cod_unidad_negocio?: number;
  tipo_cuenta?: string;
  debe?: number;
  haber?: number;
  valor?: number;
  descrip?: string;
  idproc?: number;
  fecha_alta?: Date;
}

export type tt_ctas_auxPk = "id";
export type tt_ctas_auxId = tt_ctas_aux[tt_ctas_auxPk];
export type tt_ctas_auxCreationAttributes = Optional<tt_ctas_auxAttributes, tt_ctas_auxPk>;

export class tt_ctas_aux extends Model<tt_ctas_auxAttributes, tt_ctas_auxCreationAttributes> implements tt_ctas_auxAttributes {
  id!: number;
  cod_cuenta?: number;
  cod_contabilidad?: number;
  cod_empresa?: number;
  cod_unidad_negocio?: number;
  tipo_cuenta?: string;
  debe?: number;
  haber?: number;
  valor?: number;
  descrip?: string;
  idproc?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_ctas_aux {
    tt_ctas_aux.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_contabilidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_cuenta: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    descrip: {
      type: DataTypes.STRING(100),
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
    tableName: 'tt_ctas_aux',
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
        name: "tt_ctas_aux_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_ctas_aux;
  }
}
