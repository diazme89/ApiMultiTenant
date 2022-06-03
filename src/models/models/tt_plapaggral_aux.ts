import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_plapaggral_auxAttributes {
  idproc: number;
  legajo: number;
  nombre?: string;
  propio?: string;
  importe?: number;
  fecha_alta?: Date;
}

export type tt_plapaggral_auxPk = "idproc" | "legajo";
export type tt_plapaggral_auxId = tt_plapaggral_aux[tt_plapaggral_auxPk];
export type tt_plapaggral_auxCreationAttributes = Optional<tt_plapaggral_auxAttributes, tt_plapaggral_auxPk>;

export class tt_plapaggral_aux extends Model<tt_plapaggral_auxAttributes, tt_plapaggral_auxCreationAttributes> implements tt_plapaggral_auxAttributes {
  idproc!: number;
  legajo!: number;
  nombre?: string;
  propio?: string;
  importe?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_plapaggral_aux {
    tt_plapaggral_aux.init({
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    legajo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    propio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    importe: {
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
    tableName: 'tt_plapaggral_aux',
    timestamps: false,
    indexes: [
      {
        name: "plapaggral_aux_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "legajo" },
        ]
      },
    ]
  });
  return tt_plapaggral_aux;
  }
}
