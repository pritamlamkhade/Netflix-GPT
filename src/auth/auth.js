import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../utils/firebase";

const auth = getAuth(app);

export const registerUser = async (email, password, profile) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateUserProfile(profile);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (profile) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, profile);
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    signOut(auth);
  } catch (error) {
    throw error;
  }
};
