#!/bin/bash
cd "$(dirname "$0")"
python3 -c "
import http.server, os
os.chdir('$(pwd)')
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=8091)
"
