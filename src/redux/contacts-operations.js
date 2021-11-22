import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://6187c264057b9b00177f9a95.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    try {
      const { data } = await axios.post("/contacts", contact);

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      console.log(data);
      return id;
    } catch (error) {
      return error;
    }
  }
);
