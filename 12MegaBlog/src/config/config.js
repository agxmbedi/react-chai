const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),


}

export default config