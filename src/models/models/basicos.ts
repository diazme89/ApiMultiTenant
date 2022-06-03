import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface basicosAttributes {
  id: number;
  cod_periodo?: number;
  nombre?: string;
  precio_uta?: number;
  activo_corriente?: number;
  activo_no_corriente?: number;
  pasivo_corto?: number;
  pasivo_largo?: number;
  patrimonio?: number;
  primer_mes?: number;
  pcio_milimetro?: number;
  iva_compras?: number;
  iva_ventas?: number;
  iva_compras1?: number;
  iva_compras2?: number;
  iva_compras3?: number;
  iva_compras4?: number;
  iva_compras5?: number;
  iva_compras6?: number;
  iva_compras7?: number;
  iva_compras8?: number;
  iva_compras9?: number;
  iva_compras10?: number;
  iva_compras11?: number;
  iva_compras12?: number;
  iva_ventas1?: number;
  iva_ventas2?: number;
  iva_ventas3?: number;
  iva_ventas4?: number;
  iva_ventas5?: number;
  iva_ventas6?: number;
  iva_ventas7?: number;
  iva_ventas8?: number;
  iva_ventas9?: number;
  iva_ventas10?: number;
  iva_ventas11?: number;
  iva_ventas12?: number;
  superficie?: number;
  anio_amortizacion?: number;
  anio_amortizacion_agricultura?: number;
  anio_amortizacion_bienes?: number;
  otros_ingresos_plan?: number;
  otros_egresos_plan?: number;
  precio_uta_contratista?: number;
  utas_pesos?: string;
  otros_ingresos_gest?: number;
  otros_egresos_gest?: number;
  direccion?: string;
  cuit?: string;
  anio_comienzo?: number;
  pcio_milimetro_plan?: number;
  actividad?: string;
  situacion_iva?: string;
  localidad?: string;
  provincia?: string;
}

export type basicosPk = "id";
export type basicosId = basicos[basicosPk];
export type basicosCreationAttributes = Optional<basicosAttributes, basicosPk>;

export class basicos extends Model<basicosAttributes, basicosCreationAttributes> implements basicosAttributes {
  id!: number;
  cod_periodo?: number;
  nombre?: string;
  precio_uta?: number;
  activo_corriente?: number;
  activo_no_corriente?: number;
  pasivo_corto?: number;
  pasivo_largo?: number;
  patrimonio?: number;
  primer_mes?: number;
  pcio_milimetro?: number;
  iva_compras?: number;
  iva_ventas?: number;
  iva_compras1?: number;
  iva_compras2?: number;
  iva_compras3?: number;
  iva_compras4?: number;
  iva_compras5?: number;
  iva_compras6?: number;
  iva_compras7?: number;
  iva_compras8?: number;
  iva_compras9?: number;
  iva_compras10?: number;
  iva_compras11?: number;
  iva_compras12?: number;
  iva_ventas1?: number;
  iva_ventas2?: number;
  iva_ventas3?: number;
  iva_ventas4?: number;
  iva_ventas5?: number;
  iva_ventas6?: number;
  iva_ventas7?: number;
  iva_ventas8?: number;
  iva_ventas9?: number;
  iva_ventas10?: number;
  iva_ventas11?: number;
  iva_ventas12?: number;
  superficie?: number;
  anio_amortizacion?: number;
  anio_amortizacion_agricultura?: number;
  anio_amortizacion_bienes?: number;
  otros_ingresos_plan?: number;
  otros_egresos_plan?: number;
  precio_uta_contratista?: number;
  utas_pesos?: string;
  otros_ingresos_gest?: number;
  otros_egresos_gest?: number;
  direccion?: string;
  cuit?: string;
  anio_comienzo?: number;
  pcio_milimetro_plan?: number;
  actividad?: string;
  situacion_iva?: string;
  localidad?: string;
  provincia?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof basicos {
    basicos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    precio_uta: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    activo_corriente: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    activo_no_corriente: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pasivo_corto: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    pasivo_largo: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    patrimonio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    primer_mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    pcio_milimetro: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras5: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras6: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras7: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras8: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras9: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras10: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras11: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_compras12: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas5: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas6: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas7: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas8: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas9: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas10: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas11: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    iva_ventas12: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    superficie: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    anio_amortizacion: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    anio_amortizacion_agricultura: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    anio_amortizacion_bienes: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    otros_ingresos_plan: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    otros_egresos_plan: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    precio_uta_contratista: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    utas_pesos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    otros_ingresos_gest: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    otros_egresos_gest: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    anio_comienzo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pcio_milimetro_plan: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    actividad: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    situacion_iva: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'basicos',
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
  return basicos;
  }
}
