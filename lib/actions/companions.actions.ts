"use server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../Supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("companions")
    .insert({
      ...formData,
      author,
    })
    .select("*")
    .single();
  if (error) {
    throw new Error(`Error creating companion: ${error.message}`);
  }
  return data[0];
};
