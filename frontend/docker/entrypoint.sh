#!/bin/sh

echo "Current NODE_ENV is: $NODE_ENV"

npx ng analytics off
echo "Angular analytics is off"

if [ "$NODE_ENV" = "production" ]; then
    echo "Running production Angular Application"
    npm run build:prod
elif [ "$NODE_ENV" = "development" ]; then
    echo "Running development Angular Application"
    ng serve --host=0.0.0.0 --poll 2000
else
    echo "NODE_ENV not set or unknown. Falling back to default."
    npm run build:prod
fi