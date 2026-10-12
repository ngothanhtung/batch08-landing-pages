import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let dbPromise: Promise<Firestore> | null = null;

/**
 * Khởi tạo Firestore lần đầu khi cần (import động) để SDK Firebase
 * không làm nặng lần tải trang đầu tiên.
 */
export function getDb(): Promise<Firestore> {
  dbPromise ??= Promise.all([import("firebase/app"), import("firebase/firestore")]).then(
    ([{ initializeApp, getApps, getApp }, { getFirestore }]) => {
      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      return getFirestore(app);
    },
  );
  return dbPromise;
}

export type NewCustomer = {
  name: string;
  phone: string;
  email: string;
  plan: string;
};

/** Lưu khách đăng ký tư vấn vào collection `customers`. */
export async function createCustomer({ name, phone, email, plan }: NewCustomer) {
  const db = await getDb();
  const { addDoc, collection, serverTimestamp } = await import("firebase/firestore");

  return addDoc(collection(db, "customers"), {
    name,
    phone,
    email,
    description: `Gói quan tâm: ${plan} · Nguồn: Landing page`,
    priority: "high",
    status: "active",
    // Khách chưa đăng nhập: nhân viên gán người phụ trách sau trong trang quản trị
    assignedTo: null,
    createdBy: null,
    updatedBy: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
