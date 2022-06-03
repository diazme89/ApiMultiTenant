import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cpro_auxAttributes {
  id: number;
  id_cpo?: number;
  importe?: number;
  circuito?: string;
  cod_empresa?: number;
  marca?: number;
  tag?: string;
  fecha?: string;
  tipo_comprobante?: string;
  codigo?: number;
  fecha_alta?: Date;
}

export type tt_cpro_auxPk = "id";
export type tt_cpro_auxId = tt_cpro_aux[tt_cpro_auxPk];
export type tt_cpro_auxCreationAttributes = Optional<tt_cpro_auxAttributes, tt_cpro_auxPk>;

export class tt_cpro_aux extends Model<tt_cpro_auxAttributes, tt_cpro_auxCreationAttributes> implements tt_cpro_auxAttributes {
  id!: number;
  id_cpo?: number;
  importe?: number;
  circuito?: string;
  cod_empresa?: number;
  marca?: number;
  tag?: string;
  fecha?: string;
  tipo_comprobante?: string;
  codigo?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cpro_aux {
    tt_cpro_aux.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cpo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    circuito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    tag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_comprobante: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    codigo: {
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
    tableName: 'tt_cpro_aux',
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
        name: "idx_tt_cpro_aux_1",
        using: "BTREE",
        fields: [
          { name: "circuito" },
          { name: "cod_empresa" },
          { name: "tag" },
        ]
      },
      {
        name: "idx_tt_cpro_aux_xidcpro",
        using: "BTREE",
        fields: [
          { name: "id_cpo" },
          { name: "circuito" },
          { name: "marca" },
        ]
      },
    ]
  });
  return tt_cpro_aux;
  }
}
