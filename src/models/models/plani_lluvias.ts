import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface plani_lluviasAttributes {
  finca?: string;
  anio?: string;
  numero?: number;
  orden?: string;
  id: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type plani_lluviasPk = "id";
export type plani_lluviasId = plani_lluvias[plani_lluviasPk];
export type plani_lluviasCreationAttributes = Optional<plani_lluviasAttributes, plani_lluviasPk>;

export class plani_lluvias extends Model<plani_lluviasAttributes, plani_lluviasCreationAttributes> implements plani_lluviasAttributes {
  finca?: string;
  anio?: string;
  numero?: number;
  orden?: string;
  id!: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof plani_lluvias {
    plani_lluvias.init({
    finca: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    anio: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    orden: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plani_lluvias',
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
  return plani_lluvias;
  }
}
