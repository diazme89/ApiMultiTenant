import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface finan_contratistasAttributes {
  codigo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  id: number;
}

export type finan_contratistasPk = "id";
export type finan_contratistasId = finan_contratistas[finan_contratistasPk];
export type finan_contratistasCreationAttributes = Optional<finan_contratistasAttributes, finan_contratistasPk>;

export class finan_contratistas extends Model<finan_contratistasAttributes, finan_contratistasCreationAttributes> implements finan_contratistasAttributes {
  codigo?: number;
  cantidad?: number;
  precio?: number;
  importe?: number;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof finan_contratistas {
    finan_contratistas.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'finan_contratistas',
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
  return finan_contratistas;
  }
}
