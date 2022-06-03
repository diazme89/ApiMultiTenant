import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_res_emp_servicios_auxAttributes {
  descripcion: string;
  imagen: string;
  uta: number;
  ingresos: number;
  egresos: number;
  cod_empresa_servicio: number;
  idproc: number;
}

export type tt_res_emp_servicios_auxPk = "cod_empresa_servicio" | "idproc";
export type tt_res_emp_servicios_auxId = tt_res_emp_servicios_aux[tt_res_emp_servicios_auxPk];
export type tt_res_emp_servicios_auxCreationAttributes = Optional<tt_res_emp_servicios_auxAttributes, tt_res_emp_servicios_auxPk>;

export class tt_res_emp_servicios_aux extends Model<tt_res_emp_servicios_auxAttributes, tt_res_emp_servicios_auxCreationAttributes> implements tt_res_emp_servicios_auxAttributes {
  descripcion!: string;
  imagen!: string;
  uta!: number;
  ingresos!: number;
  egresos!: number;
  cod_empresa_servicio!: number;
  idproc!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_res_emp_servicios_aux {
    tt_res_emp_servicios_aux.init({
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    imagen: {
      type: DataTypes.CHAR(61),
      allowNull: false
    },
    uta: {
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
    },
    cod_empresa_servicio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tt_res_emp_servicios_aux',
    timestamps: false,
    indexes: [
      {
        name: "res_emp_servicios_aux_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_empresa_servicio" },
        ]
      },
    ]
  });
  return tt_res_emp_servicios_aux;
  }
}
