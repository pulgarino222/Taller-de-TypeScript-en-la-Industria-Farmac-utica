import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'
    import { Patients } from './tablePatients';

    @Table({
        tableName:'medications',
        timestamps:true
    })
    export class medications extends Model {
        @PrimaryKey
        @AutoIncrement
        @Column({
          type: DataType.INTEGER,
        })
        id!: number;
    
        @Column({
            type: DataType.STRING,
            allowNull: false,
            unique:true
          })
          medicationName!: string;
    
          @Column({
            type: DataType.NUMBER,
            allowNull: false,
          })
          quantity!:number;
    
          @Column({
            type: DataType.DATE,
            allowNull: false,
            unique:true
          })
          expirationDate!: Date;
    
          @Column({
            type: DataType.NUMBER,
            allowNull: false,
          })
          price!:Number;   

          @ForeignKey(() => Patients)
        @Column({
        type: DataType.INTEGER,
        allowNull: false,
        })
        patientId!: number;

          @BelongsTo(()=>Patients)
          patient!:Patients

      }


