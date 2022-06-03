import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_resultado_actividadesAttributes {
  cod_actividad: number;
  descripcion: string;
  imagen?: string;
  superficie: number;
  rendimiento: number;
  ingresos: number;
  egresos: number;
}

export type tt_resultado_actividadesPk = "cod_actividad";
export type tt_resultado_actividadesId = tt_resultado_actividades[tt_resultado_actividadesPk];
export type tt_resultado_actividadesCreationAttributes = Optional<tt_resultado_actividadesAttributes, tt_resultado_actividadesPk>;

export class tt_resultado_actividades extends Model<tt_resultado_actividadesAttributes, tt_resultado_actividadesCreationAttributes> implements tt_resultado_actividadesAttributes {
  cod_actividad!: number;
  descripcion!: string;
  imagen?: string;
  superficie!: number;
  rendimiento!: number;
  ingresos!: number;
  egresos!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_resultado_actividades {
    tt_resultado_actividades.init({
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    imagen: {
      type: DataTypes.CHAR(61),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    rendimiento: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    ingresos: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    egresos: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tt_resultado_actividades',
    timestamps: false,
    indexes: [
      {
        name: "resultado_actividades_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_actividad" },
        ]
      },
    ]
  });
  return tt_resultado_actividades;
  }
}
