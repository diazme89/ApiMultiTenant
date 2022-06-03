import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulo_equiv_unidadesAttributes {
  id: number;
  cod_articulo: number;
  cod_unidad_medida: number;
  coeficiente: number;
  predefinido?: string;
}

export type articulo_equiv_unidadesPk = "id";
export type articulo_equiv_unidadesId = articulo_equiv_unidades[articulo_equiv_unidadesPk];
export type articulo_equiv_unidadesCreationAttributes = Optional<articulo_equiv_unidadesAttributes, articulo_equiv_unidadesPk>;

export class articulo_equiv_unidades extends Model<articulo_equiv_unidadesAttributes, articulo_equiv_unidadesCreationAttributes> implements articulo_equiv_unidadesAttributes {
  id!: number;
  cod_articulo!: number;
  cod_unidad_medida!: number;
  coeficiente!: number;
  predefinido?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulo_equiv_unidades {
    articulo_equiv_unidades.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_unidad_medida: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    coeficiente: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    predefinido: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'articulo_equiv_unidades',
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
        name: "articulo_equiv_cod_articulo_idx",
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
      {
        name: "articulo_equiv_cod_um_idx",
        using: "BTREE",
        fields: [
          { name: "cod_unidad_medida" },
        ]
      },
    ]
  });
  return articulo_equiv_unidades;
  }
}
