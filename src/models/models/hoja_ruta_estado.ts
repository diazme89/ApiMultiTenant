import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hoja_ruta_estadoAttributes {
  id: number;
  cod_estado: number;
  descripcion?: string;
}

export type hoja_ruta_estadoPk = "id";
export type hoja_ruta_estadoId = hoja_ruta_estado[hoja_ruta_estadoPk];
export type hoja_ruta_estadoCreationAttributes = Optional<hoja_ruta_estadoAttributes, hoja_ruta_estadoPk>;

export class hoja_ruta_estado extends Model<hoja_ruta_estadoAttributes, hoja_ruta_estadoCreationAttributes> implements hoja_ruta_estadoAttributes {
  id!: number;
  cod_estado!: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof hoja_ruta_estado {
    hoja_ruta_estado.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_estado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoja_ruta_estado',
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
  return hoja_ruta_estado;
  }
}
