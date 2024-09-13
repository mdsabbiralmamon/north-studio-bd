import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/mongodb';

export async function GET(request: NextRequest) {
    try {
        await client.connect();
        const projectsCollection = client.db("northStudioDB").collection("projectsData");

        // Get the limit and skip parameters from the query
        const url = new URL(request.url);
        const limitParam = url.searchParams.get("limit");
        const skipParam = url.searchParams.get("skip");
        
        // Handle potential null values and provide default values
        const limit = parseInt(limitParam ?? '9', 10); // Default to 9 if not provided
        const skip = parseInt(skipParam ?? '0', 10);   // Default to 0 if not provided

        const projectsData = await projectsCollection.find({}).skip(skip).limit(limit).toArray();
        
        return NextResponse.json({
            projectsData: projectsData,
        });
    } catch (error) {
        console.error(error);

        // Provide a default message if error.message is not available
        const errorMessage = (error as Error).message || 'An unexpected error occurred';

        return NextResponse.json({
            ServerStatus: "Error",
            message: errorMessage,
        }, { status: 500 });
    }
}
