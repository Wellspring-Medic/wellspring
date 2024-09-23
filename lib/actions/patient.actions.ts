"use server";

import { ID, Models, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import {
  BUCKET_ID,
  WELLSPRING_DB_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents?.users[0];
    }
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};

export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      WELLSPRING_DB_ID!,
      PATIENT_COLLECTION_ID!,
      [
        Query.equal('userId', userId)
      ]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.log(error);
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Add file to the storage bucket
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    
    let file;
    if (identificationDocument) {
      const blobFile = identificationDocument.get("blobFile") as Blob;
      const fileName = identificationDocument.get("fileName") as string;

      if (blobFile && fileName) {const arrayBuffer = await blobFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        const inputFile = InputFile.fromBuffer(buffer, fileName);
        file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
      }
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      WELLSPRING_DB_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.log(error);
  }
};
