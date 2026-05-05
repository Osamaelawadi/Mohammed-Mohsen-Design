import http.server
import socketserver
import json
import os

PORT = 5000

class SaveHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            # Check if it's a JSON save or a File upload
            if self.path == '/upload':
                # Handle file upload
                filename = self.headers.get('X-Filename', 'uploaded_image.png')
                filepath = os.path.join('assets', filename)
                
                # Ensure assets folder exists
                if not os.path.exists('assets'):
                    os.makedirs('assets')
                    
                with open(filepath, 'wb') as f:
                    f.write(post_data)
                
                res = {"status": "success", "path": f"assets/{filename}"}
                print(f"Successfully uploaded: {filepath}")
            else:
                # Handle data.js save
                data = json.loads(post_data)
                js_content = f"const siteData = {json.dumps(data, indent=4)};"
                with open('js/data.js', 'w', encoding='utf-8') as f:
                    f.write(js_content)
                res = {"status": "success"}
                print("Successfully saved changes to js/data.js")
                
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode())
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(str(e).encode())
            print(f"Error: {e}")

print(f"Admin Auto-Save Server running at http://localhost:{PORT}")
print("Keep this window open while editing your site!")
with socketserver.TCPServer(("", PORT), SaveHandler) as httpd:
    httpd.serve_forever()
