#!/usr/bin/env sh

(cd server && uvicorn app:app --reload --host 0.0.0.0)

ip: 192.168.1.10:8000

cd server
uvicorn app:app --reload --host 0.0.0.0

cd frontend 
npm run dev