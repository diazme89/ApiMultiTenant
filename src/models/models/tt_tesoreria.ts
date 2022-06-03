import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_tesoreriaAttributes {
  id: number;
  idproc?: number;
  fecha_alta?: Date;
  desc_cta_disp?: string;
  desc_cta_cble?: string;
  tipo?: string;
  monto?: number;
}

export type tt_tesoreriaPk = "id";
export type tt_tesoreriaId = tt_tesoreria[tt_tesoreriaPk];
export type tt_tesoreriaCreationAttributes = Optional<tt_tesoreriaAttributes, tt_tesoreriaPk>;

export class tt_tesoreria extends Model<tt_tesoreriaAttributes, tt_tesoreriaCreationAttributes> implements tt_tesoreriaAttributes {
  id!: number;
  idproc?: number;
  fecha_alta?: Date;
  desc_cta_disp?: string;
  desc_cta_cble?: string;
  tipo?: string;
  monto?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_tesoreria {
    tt_tesoreria.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    desc_cta_disp: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    desc_cta_cble: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_tesoreria',
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
        name: "tt_tesoreria_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_tesoreria;
  }
}
