import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface formato_aplicativoAttributes {
  id: number;
  codigo: number;
  aplicativo: string;
}

export type formato_aplicativoPk = "id";
export type formato_aplicativoId = formato_aplicativo[formato_aplicativoPk];
export type formato_aplicativoCreationAttributes = Optional<formato_aplicativoAttributes, formato_aplicativoPk>;

export class formato_aplicativo extends Model<formato_aplicativoAttributes, formato_aplicativoCreationAttributes> implements formato_aplicativoAttributes {
  id!: number;
  codigo!: number;
  aplicativo!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof formato_aplicativo {
    formato_aplicativo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    aplicativo: {
      type: DataTypes.CHAR(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'formato_aplicativo',
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
    ]
  });
  return formato_aplicativo;
  }
}
