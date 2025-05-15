import {
  collection,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit as limitFn,
  where,
  QueryDocumentSnapshot,
  DocumentData,
  limit,
} from "firebase/firestore";
import { dbService } from "./firebase";
import { Post } from "@/types/post";
//import { User } from"../types"; // 또는 "@/types" 경로 설정에 따라 변경

// 🔹 특정 uid를 가진 유저의 모든 게시물
export const getPostsByUserUid = async (uid: string): Promise<Post[]> => {
  try {
    const postsRef = collection(dbService, "posts");
    const q = query(postsRef, where("uid", "==", uid));
    const snapshot = await getDocs(q);

    const posts: Post[] = [];
    snapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as Post);
    });

    return posts;
  } catch (error) {
    console.error("유저 게시물 불러오기 실패:", error);
    return [];
  }
};

// 🔹 닉네임으로 유저 검색 (중복 닉네임 가능성 고려)
export const getUsersByNickname = async (nickname: string): Promise<User[]> => {
  try {
    const usersRef = collection(dbService, "users");
    const q = query(usersRef, where("nickname", "==", nickname));
    const snapshot = await getDocs(q);

    const users: User[] = [];
    snapshot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() } as User);
    });

    return users;
  } catch (error) {
    console.error("닉네임으로 유저 검색 실패:", error);
    return [];
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const postsRef = collection(dbService, "posts");
    const snapshot = await getDocs(postsRef);

    const posts: Post[] = [];
    snapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as Post);
    });

    return posts;
  } catch (error) {
    console.error("🔥 모든 게시물 불러오기 실패:", error);
    return [];
  }
};

/**
 * 모든 posts 컬렉션에서 문서를 페이지네이션 방식으로 불러오는 함수
 * @param lastDoc 마지막으로 불러온 문서 (없으면 처음부터 시작)
 * @param count 한 번에 가져올 문서 수 (기본값: 6)
 * @returns { posts, lastDoc } - 게시물 배열과 다음 페이지를 위한 마지막 문서
 */

// lastDoc을 명확하게 타입 지정
export const getAllPostsPaginated = async (
  lastDoc: QueryDocumentSnapshot<DocumentData> | null = null
) => {
  const postRef = collection(dbService, "posts");

  const postQuery = lastDoc
    ? query(
        postRef,
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(9)
      )
    : query(postRef, orderBy("createdAt", "desc"), limit(9));

  const snapshot = await getDocs(postQuery);

  const posts: Post[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Post),
  }));

  return {
    posts,
    lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
  };
};

export const getUserPostsPaginated = async (
  uid: string,
  lastDoc: any
): Promise<{ posts: Post[]; lastDoc: any }> => {
  const q = lastDoc
    ? query(
        collection(dbService, "posts"),
        where("uid", "==", uid),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(6)
      )
    : query(
        collection(dbService, "posts"),
        where("uid", "==", uid),
        orderBy("createdAt", "desc"),
        limit(6)
      );

  const snapshot = await getDocs(q);
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];

  const last = snapshot.docs[snapshot.docs.length - 1] ?? null;
  return { posts, lastDoc: last };
};
