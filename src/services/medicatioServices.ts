import { RepositoryMedications } from "../repositories/medicationRepository";
import { inject, injectable } from "tsyringe";
import { medications } from "../models/tableMedications";

@injectable()

export class ServiceMedications{
    constructor(@inject(RepositoryMedications) private RepositoryMedications:RepositoryMedications){}

    async getAllMedications(){
        return await this.RepositoryMedications.finAll()
    }
    async findMedicationById(id:number){
        try {
          return await this.RepositoryMedications.findById(id)
        } catch (error) {
            console.log(error)
        }
    }

    async createMedication(medication:Partial<medications>) {
        return await this.RepositoryMedications.createdNewMedication(medication);
      }


}
