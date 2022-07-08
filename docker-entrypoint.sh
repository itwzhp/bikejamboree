#!/bin/sh

# based on https://github.com/nodejs/docker-node/blob/7e47b378c42b03ae6afae704c5bf5b724aae2b92/docker-entrypoint.sh
# adds support for setting the environment via APP_ENVIRONMENT variable

set -e

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

cp .env.$APP_ENVIRONMENT .env

exec "$@"
