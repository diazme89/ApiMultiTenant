import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface graficoAttributes {
  descripcion?: string;
  valor1?: number;
  id: number;
}

export type graficoPk = "id";
export type graficoId = grafico[graficoPk];
export type graficoCreationAttributes = Optional<graficoAttributes, graficoPk>;

export class grafico extends Model<graficoAttributes, graficoCreationAttributes> implements graficoAttributes {
  descripcion?: string;
  valor1?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof grafico {
    grafico.init({
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    valor1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'grafico',
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
  return grafico;
  }
}
