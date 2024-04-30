#  Individual Backend

## Setup this repo to start development

-   Run `make bootstrap` (for the first time setup)
-   Run `make dev-up` to start dev.
-   Happy coding :tada:

## To write new migrate

-   Run `make create-migrate NewMigrationName` to create new migration file.
-   Run `make up-migrate` to run all migration.
-   Run `make down-migrate` to revert 1 version right before.


## How to deploy 

```
make deploy
```