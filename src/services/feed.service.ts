import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default class FeedService {
    private static feedCollectionRef = collection(db, "feed");
    static async getFeeds() {
        const data = await getDocs(this.feedCollectionRef);
        return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    }

    static async addFeed(feed: string, userId: string) {
        await addDoc(this.feedCollectionRef, {feed, uid: userId})
    }

    static async deleteFeed(id: string) {
        const userDoc = doc(db, "feed", id);
        deleteDoc(userDoc);
    }
}