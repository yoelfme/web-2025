# Migrations

## Install ts-node

```bash
npm install ts-node
```

## Configure the typeorm in the package.json

```json
"scripts": {
   "typeorm": "typeorm-ts-node-esm"
}
```

## Create a new migration

```bash
npm run typeorm migration:create src/migrations/CreateContactsTable
```

## Run migrations

```bash
npm run typeorm migration:run -- -d src/config/typeorm.config.ts
```