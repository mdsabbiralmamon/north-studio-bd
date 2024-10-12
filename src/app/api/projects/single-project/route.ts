import { NextRequest, NextResponse } from 'next/server';
import client from '@/lib/mongodb';
import { ObjectId } from 'mongodb'; 

export async function GET(request: NextRequest) {
  try {
    // Connect to MongoDB
    await client.connect();
    const projectsCollection = client.db("northStudioDB").collection("projectsData");

    // Extract the 'id' parameter from the URL
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    // Convert the 'id' to ObjectId and query the collection
    const project = await projectsCollection.findOne({ _id: new ObjectId(id) });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Return the found project
    return NextResponse.json({ project });
    
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    // Optionally close the MongoDB connection
    await client.close();
  }
}
