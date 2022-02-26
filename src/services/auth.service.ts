import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default class AuthService {
  static signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  static signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  static signOut() {
    return auth.signOut()
  }
}