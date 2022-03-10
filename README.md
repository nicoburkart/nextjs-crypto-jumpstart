# NextJS Crypto Jumpstart

A jumpstart project that has user management, web3 connection and a database


## Preview

Tech Stack:

- Next.js as the React framework
- Apollo Server as the GraphQL server
- Nexus for constructing the GraphQL schema
- Apollo Client as the GraphQL client
- Prisma as the ORM for migrations and database access
- PostgreSQL as the database
- AWS S3 for uploading images
- Auth0 for authentication
- TypeScript as the programming language
- TailwindCSS a utility-first CSS framework
- Vercel for deployment

## Development setup

npm install

## Development Notes

--- Database:

create Tables in DB run: (defined in schema.prisma)
npx prisma db push

seed DB run: (defined in seed.ts)
npx prisma db seed

to view DB run:
npx prisma studio

## Deploy
