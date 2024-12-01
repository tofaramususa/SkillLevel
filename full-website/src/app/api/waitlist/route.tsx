///Handle the post route, it will be the only one used
//We will sent an email
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"
import crypto from 'crypto'
import { NextResponse } from 'next/server'

// Prevent static optimization since we need dynamic responses
export const dynamic = 'force-dynamic'

const client = DynamoDBDocumentClient.from(new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
}))

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Invalid email', status: false },
        { status: 400 }
      )
    }

    const params = {
      TableName: process.env.DB_TABLE_NAME || '',
      Item: {
        waitlist_email: crypto.randomBytes(20).toString('hex'),
        email: email,
        createdAt: Date.now().toString()
      }
    }

    await client.send(new PutCommand(params))
    
    return NextResponse.json(
      { message: 'Email successfully added to waitlist', status: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('DynamoDB Error:', error)
    return NextResponse.json(
      { message: 'Failed to store email', status: false },
      { status: 500 }
    )
  }
}

// Optionally handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}