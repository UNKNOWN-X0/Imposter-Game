#!/usr/bin/env bash
#
# Double-click this file to play.
#
# It does everything the terminal instructions do — installs what is missing
# the first time, builds the app, starts the server and opens the browser —
# so a party night needs no typing. Close the window, or press Ctrl-C, to
# stop it.
#
# macOS may refuse to run it the first time, because it came out of a zip
# and has no signature: right-click the file and choose Open, then Open
# again, and it will run without asking ever after.

cd "$(dirname "$0")" || exit 1

say() { printf '\n  %s\n\n' "$1"; }
hold() {
  printf '  Press any key to close this window.'
  read -r -n 1 -s
  printf '\n'
}

# A double-click starts a bare shell that has not read ~/.zshrc, so a Node
# installed through nvm, Homebrew, Volta or fnm is not on PATH yet. Look in
# the usual places before deciding it is missing.
find_node() {
  command -v node >/dev/null 2>&1 && return 0
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  # shellcheck disable=SC1091
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" >/dev/null 2>&1
  command -v node >/dev/null 2>&1 && return 0
  for dir in /opt/homebrew/bin /usr/local/bin "$HOME/.volta/bin" "$HOME/.local/share/fnm/aliases/default/bin"; do
    if [ -x "$dir/node" ]; then
      PATH="$dir:$PATH"
      export PATH
      return 0
    fi
  done
  return 1
}

if ! find_node; then
  say "Node.js is not installed."
  echo "  Get the LTS version from https://nodejs.org, then double-click this again."
  echo ""
  hold
  exit 1
fi

# Fetch the dependencies on the first run, and again whenever an update
# (git pull) changed them.
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.package-lock.json ]; then
  say "Installing what the game needs. This takes a minute."
  if ! npm install; then
    say "That install did not finish. The message above says why."
    hold
    exit 1
  fi
fi

say "Building…"
if ! npm run build; then
  say "The build failed. The message above says why."
  hold
  exit 1
fi

PORT="${PORT:-5173}"
export PORT

# Something else already on the port (often this game, still running in
# another window) would make the server stop straight away.
if command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  say "Port $PORT is already in use, probably by the game in another window."
  echo "  Close that window first, or open http://localhost:${PORT} to use it."
  echo ""
  hold
  exit 1
fi

# Give the server a moment to bind, then open a browser on this computer.
# Everybody else uses the address the server prints, which is the one on the
# wifi rather than this one.
(
  sleep 1.5
  if command -v open >/dev/null 2>&1; then
    open "http://localhost:${PORT}"
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "http://localhost:${PORT}"
  fi
) &

if ! node server/server.js; then
  say "The server stopped. The message above says why."
  hold
  exit 1
fi
