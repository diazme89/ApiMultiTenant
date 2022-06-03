import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface unidad_de_medidaAttributes {
  id: number;
  cod_unidad_medida: number;
  descripcion: string;
  tipo_unidad?: string;
  cod_unidad?: number;
}

export type unidad_de_medidaPk = "id";
export type unidad_de_medidaId = unidad_de_medida[unidad_de_medidaPk];
export type unidad_de_medidaCreationAttributes = Optional<unidad_de_medidaAttributes, unidad_de_medidaPk>;

export class unidad_de_medida extends Model<unidad_de_medidaAttributes, unidad_de_medidaCreationAttributes> implements unidad_de_medidaAttributes {
  id!: number;
  cod_unidad_medida!: number;
  descripcion!: string;
  tipo_unidad?: string;
  cod_unidad?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof unidad_de_medida {
    unidad_de_medida.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_unidad_medida: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo_unidad: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_unidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad_de_medida',
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
        name: "cod_unidad_medida_idx",
        using: "BTREE",
        fields: [
          { name: "cod_unidad_medida" },
        ]
      },
    ]
  });
  return unidad_de_medida;
  }
}
