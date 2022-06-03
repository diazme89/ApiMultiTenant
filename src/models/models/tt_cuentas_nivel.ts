import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_cuentas_nivelAttributes {
  id: number;
  idproc: number;
  grupo?: string;
  tipo_nivel: string;
  id_plan: number;
  fecha_alta?: Date;
}

export type tt_cuentas_nivelPk = "id";
export type tt_cuentas_nivelId = tt_cuentas_nivel[tt_cuentas_nivelPk];
export type tt_cuentas_nivelCreationAttributes = Optional<tt_cuentas_nivelAttributes, tt_cuentas_nivelPk>;

export class tt_cuentas_nivel extends Model<tt_cuentas_nivelAttributes, tt_cuentas_nivelCreationAttributes> implements tt_cuentas_nivelAttributes {
  id!: number;
  idproc!: number;
  grupo?: string;
  tipo_nivel!: string;
  id_plan!: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_cuentas_nivel {
    tt_cuentas_nivel.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    grupo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    tipo_nivel: {
      type: DataTypes.CHAR(9),
      allowNull: false
    },
    id_plan: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_cuentas_nivel',
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
        name: "i_cuentas_nivel_2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "tipo_nivel" },
        ]
      },
    ]
  });
  return tt_cuentas_nivel;
  }
}
