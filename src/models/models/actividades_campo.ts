import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface actividades_campoAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type actividades_campoPk = "id";
export type actividades_campoId = actividades_campo[actividades_campoPk];
export type actividades_campoCreationAttributes = Optional<actividades_campoAttributes, actividades_campoPk>;

export class actividades_campo extends Model<actividades_campoAttributes, actividades_campoCreationAttributes> implements actividades_campoAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof actividades_campo {
    actividades_campo.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actividades_campo',
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
  return actividades_campo;
  }
}
