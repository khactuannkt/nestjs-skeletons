alias = individual-backend

ifeq (create-migrate,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  MIGRATION_NAME := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(MIGRATION_NAME):;@:)
endif

default: up

bootstrap:

	echo "Create .env file..."
	cp .env.example .env
	
	yarn
	make up
	make up-migrate
	yarn run start:dev
	
up:
	docker compose up -d --force-recreate --remove-orphans

dev-up:
	docker compose up -d --remove-orphans
	yarn run start:dev

down:
	docker compose down

ps:
	docker compose ps

up-migrate:
	yarn run migration:run

down-migrate:
	yarn run migration:revert

create-migrate:
	yarn run migration:create ./src/database/migrations/individual${MIGRATION_NAME}

generate-migrate:
	yarn run migration:generate ./src/database/migrations/individual${MIGRATION_NAME}

fork-kill-dev:
	lsof -t -i tcp:3000 | xargs kill