import { Router } from "express";
import { ControllersMedications } from "../controllers/medicationsControler";

export const medications=Router()


medications.get('/medications',ControllersMedications.getAllMedications)
medications.get('/medications/:id',ControllersMedications.getMedicationsById)
medications.post('/medications',ControllersMedications.newMedicationRegister)

