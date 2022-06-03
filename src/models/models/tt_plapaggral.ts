import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_plapaggralAttributes {
  legajo: number;
  nombre?: string;
  propio?: string;
  importe?: number;
  fecha_alta?: Date;
}

export type tt_plapaggralPk = "legajo";
export type tt_plapaggralId = tt_plapaggral[tt_plapaggralPk];
export type tt_plapaggralCreationAttributes = Optional<tt_plapaggralAttributes, tt_plapaggralPk>;

export class tt_plapaggral extends Model<tt_plapaggralAttributes, tt_plapaggralCreationAttributes> implements tt_plapaggralAttributes {
  legajo!: number;
  nombre?: string;
  propio?: string;
  importe?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_plapaggral {
    tt_plapaggral.init({
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
    tableName: 'tt_plapaggral',
    timestamps: false,
    indexes: [
      {
        name: "plapaggral_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "legajo" },
        ]
      },
    ]
  });
  return tt_plapaggral;
  }
}
