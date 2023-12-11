import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

interface Experiences {
  title: string;
  title2?: string;
  title3?: string;
  description: string;
  asideText?: string;
  asideImage?: string;
  usedTechnologies?: string[];
}

export const experiencesApi = createApi({
  reducerPath: "experiencesApi",
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getExperiences: builder.query<Experiences[] | null, void>({
      queryFn: async (): Promise<{ data: Experiences[] | null }> => {
        try {
          const ref = collection(db, "experiences");
          const getDocument = await getDocs(ref);
          const data = getDocument.docs.map((doc) => doc.data());
          if (data) {
            // @ts-ignore
            return { data };
          } else {
            return { data: null };
          }
        } catch (error) {
          console.error("Error fetching experiences:", error);
          return { data: null };
        }
      },
    }),
  }),
});

export const { useGetExperiencesQuery } = experiencesApi;