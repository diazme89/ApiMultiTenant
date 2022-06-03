import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_resultado_actividades_auxAttributes {
  idproc: number;
  cod_actividad: number;
  descripcion: string;
  imagen?: string;
  superficie: number;
  rendimiento: number;
  ingresos: number;
  egresos: number;
}

export type tt_resultado_actividades_auxPk = "idproc" | "cod_actividad";
export type tt_resultado_actividades_auxId = tt_resultado_actividades_aux[tt_resultado_actividades_auxPk];
export type tt_resultado_actividades_auxCreationAttributes = Optional<tt_resultado_actividades_auxAttributes, tt_resultado_actividades_auxPk>;

export class tt_resultado_actividades_aux extends Model<tt_resultado_actividades_auxAttributes, tt_resultado_actividades_auxCreationAttributes> implements tt_resultado_actividades_auxAttributes {
  idproc!: number;
  cod_actividad!: number;
  descripcion!: string;
  imagen?: string;
  superficie!: number;
  rendimiento!: number;
  ingresos!: number;
  egresos!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_resultado_actividades_aux {
    tt_resultado_actividades_aux.init({
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
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
    tableName: 'tt_resultado_actividades_aux',
    timestamps: false,
    indexes: [
      {
        name: "resultado_act_aux_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_actividad" },
        ]
      },
    ]
  });
  return tt_resultado_actividades_aux;
  }
}
