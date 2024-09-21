import config from "../config/config";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appProjectId);
        this.account= new Account(this.client);
        this.databases= new Databases(this.client);
        this.bucket= new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("error solve kar bhai::createPost:: ",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("error solve kar bhai::updatePost :: ",error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error solve kar bhai::deletePost :: ",error) 
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appDatabaseId,
                config.appCollectionId,
                slug
            )
        } catch (error) {
            console.log("error solve kar bhai::getPost :: ",error) ;
            return false;
        }
    }
    async getPost(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appDatabaseId,
                config.appCollectionId,
                queries,
            )
        } catch (error) {
            console.log("error solve kar bhai::getPost :: ",error) ;
            return false;
        }
    }
    // fill upload method

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error solve kar bhai::uploadFile :: ",error) ;
            return false;
        }
    }
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                config.appBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("error solve kar bhai::deleteFile :: ",error) ;
            return false;
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appBucketId,
            fileID
        )
    }
}

const service= new Service();
export default service
