#!/bin/bash
docker login;
docker build -t khactuan2001/api.khactuan.site:latest .;
docker push khactuan2001/api.khactuan.site:latest;

ssh -T individual << EOF
  cd individual;
  git pull;
  docker pull khactuan2001/api.khactuan.site:latest;
  docker compose -f docker-compose-staging.yml up -d --remove-orphans --force-recreate;
EOF
