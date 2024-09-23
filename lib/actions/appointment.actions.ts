"use server";

import { ID } from "node-appwrite";
import {
  databases,
  APPOINTMENT_COLLECTION_ID,
  WELLSPRING_DB_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";





export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      WELLSPRING_DB_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    )

    return parseStringify(newAppointment);
  } catch (error) {
    console.log(error);
  }
};

export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      WELLSPRING_DB_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    )

    return parseStringify(appointment);
  } catch (error) {
    console.log(error);
    
  }
}