#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
import threading
import time

PORT = 8000
DIRECTORY = "public"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Serveur AUTOMATISATION démarré sur le port {PORT}")
        print(f"📱 URL: http://localhost:{PORT}")
        print(f"📁 Dossier: {os.path.abspath(DIRECTORY)}")
        print("⏹️  Arrêter avec Ctrl+C")
        httpd.serve_forever()

def open_browser():
    time.sleep(2)
    webbrowser.open(f'http://localhost:{PORT}')

if __name__ == "__main__":
    if not os.path.exists(DIRECTORY):
        print(f"❌ Dossier '{DIRECTORY}' non trouvé")
        exit(1)
    
    # Ouvrir le navigateur dans un thread séparé
    threading.Thread(target=open_browser, daemon=True).start()
    
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n👋 Serveur arrêté")