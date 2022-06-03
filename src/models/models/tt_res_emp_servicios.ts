import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_res_emp_serviciosAttributes {
  descripcion: string;
  imagen: string;
  uta: number;
  ingresos: number;
  egresos: number;
  cod_empresa_servicio: number;
}

export type tt_res_emp_serviciosPk = "cod_empresa_servicio";
export type tt_res_emp_serviciosId = tt_res_emp_servicios[tt_res_emp_serviciosPk];
export type tt_res_emp_serviciosCreationAttributes = Optional<tt_res_emp_serviciosAttributes, tt_res_emp_serviciosPk>;

export class tt_res_emp_servicios extends Model<tt_res_emp_serviciosAttributes, tt_res_emp_serviciosCreationAttributes> implements tt_res_emp_serviciosAttributes {
  descripcion!: string;
  imagen!: string;
  uta!: number;
  ingresos!: number;
  egresos!: number;
  cod_empresa_servicio!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_res_emp_servicios {
    tt_res_emp_servicios.init({
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
    }
  }, {
    sequelize,
    tableName: 'tt_res_emp_servicios',
    timestamps: false,
    indexes: [
      {
        name: "res_emp_servicios_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_empresa_servicio" },
        ]
      },
    ]
  });
  return tt_res_emp_servicios;
  }
}
