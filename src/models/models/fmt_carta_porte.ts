import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface fmt_carta_porteAttributes {
  id: number;
  descripcion: string;
}

export type fmt_carta_portePk = "id";
export type fmt_carta_porteId = fmt_carta_porte[fmt_carta_portePk];
export type fmt_carta_porteCreationAttributes = Optional<fmt_carta_porteAttributes, fmt_carta_portePk>;

export class fmt_carta_porte extends Model<fmt_carta_porteAttributes, fmt_carta_porteCreationAttributes> implements fmt_carta_porteAttributes {
  id!: number;
  descripcion!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof fmt_carta_porte {
    fmt_carta_porte.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fmt_carta_porte',
    timestamps: false
  });
  return fmt_carta_porte;
  }
}
