# NHFS (Next HTTP File Server)

<img width="2255" height="1432" alt="Screenshot 2025-08-10 165040" src="https://github.com/user-attachments/assets/a268affb-8b85-40b6-854f-da550fdd49cd" />

---

**NHFS** is a modern web-based file manager that allows browsing, viewing, uploading and managing files directly through a web browser. It was built using **Next.js** and **HeroUI**, and it aims to provide a clean, responsive, and user-friendly interface for interacting with files stored on a server. This project was developed as my **CS50x final project** and also serves as a personal learning experience in building scalable, full-stack web applications.

## Demo
https://github.com/user-attachments/assets/e69751e8-6580-41ed-a834-3ea95816beb0


---

## Overview

NHFS is designed to replicate many of the common operations available in traditional desktop file managers, but within a web environment. By serving files over HTTP, the application makes it possible to access and manage data from anywhere with a browser, without relying on platform-specific software. The interface is built to be sleek, minimal, and intuitive, while the backend ensures efficient file handling.

The primary goal during development was to establish a strong foundation — implementing the core functionality needed to browse and manipulate files — before adding advanced features like authentication, searching, and resumable downloads/uploads. While the current release is functional, it should be considered a preview version, and some features may be unstable.

---

## Features

The current version of NHFS supports several key capabilities:

1. **File Previews**
   Users can preview images, videos, and audio files directly in the browser without downloading them. This is especially useful for quickly checking media content before deciding whether to download or move it.

2. **Detailed File Information**
   Each file displays important details such as its size, file path, and last modified date. 

3. **File Uploads with Drag & Drop**
   NHFS supports both traditional file uploads and drag-and-drop functionality. Multiple files can be added to the server in one action, and progress is tracked to ensure smooth uploads.

4. **Full File Management**
   Users can create new files or folders, rename them, delete items, move them to other directories, and copy them — all directly from the browser interface.

---

## 🖥 Example Use Cases

* Hosting and managing a personal file library accessible from and old pc to use as a **NAS** (Network Attatched Storage).
* Providing a shared file space for small teams without setting up a full cloud storage service.
* Serving as a lightweight media server for streaming images, audio, and video files.

---

## Running NHFS

The easiest way to run NHFS is by using the `npx` command. Because NHFS comes with a script file to spawn a server without cloning the code and installing dependencies.

```bash
npx nhfs
```

> [!NOTE]
> Make sure you have [Node.js](https://nodejs.org/en/download) installed to execute `npx` command.

By default, NHFS will start a server on `localhost:3000` and serve files from the current working directory.

---

### Command Line Options

NHFS includes a few optional parameters that can be passed when launching the server:

* `--port` or `-p` — Specifies the port on which the server will run. The default is `3000`.
* `--dir` or `-d` — Sets the base directory from which files will be served. Defaults to the current working directory.
* `--hostname` or `-h` — Defines the hostname. By default, this is `localhost`.

Example:

```bash
npx nhfs -p 8080 -d ./files -h 0.0.0.0
```

This command starts NHFS on port 8080, serving files from the `./files` directory and listening on all available network interfaces.

---

## Tech Stack

> [!NOTE]
> This project uses **Typescript** as the main language to build a full stack web app.

NHFS is built with the following technologies:

* **Next.js 15 (App Router)** — With client, and server components. Providing good developer experience for writing frontend and backend code inside the same codebase.
* **HeroUI** — Very sleek, modern looking UI with accessibily built in — Matches my vibe.
* **React Dropzone** — Handles drag-and-drop file uploads without building custom dropzone — saves time.
* **TypeScript** — Javascript with C like plus more types — Better DX.
* **Node.js / API Routes** — Easy way to write server side code withouit serializing json for each request on client side. 

---

## Running Locally (Manual Setup)

If you want to run the project from source code do the following to run it locally on your machine.

**Requirements:**

* [Node.js](https://nodejs.org/en/download) version `>=18.18.0`
* Linux or macOS (Windows users should run under WSL)

1. **Clone the repository**

   ```bash
   git clone https://github.com/AliSananS/NHFS.git
   cd NHFS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**
   Create a `.env` at the root of the project files to set `BASE_DIR` if you want to serve a specific directory. If not set, the server will use the current working directory.

   > **Example:** `BASE_DIR=/home/david/Downloads` 

5. **Start the server**

   ```bash
   npm run dev
   ```

Once running, open your browser and navigate to the configured hostname and port to access the file manager.

---

## Development Notes

While this project is functional, it remains a work in progress. Some advanced features — such as authentication, secure file operations, file searching, resumable uploads, and advanced preview support — are planned but not yet implemented.

Additionally, NHFS has primarily been developed and tested on Linux. Windows support has not been fully verified, and running under WSL is recommended for Windows users.

---

## Project Status

Development of NHFS will continue gradually. Due to a busy schedule and involvement in other projects, I may not always be able to provide frequent updates. The current version is stable enough for light personal use, but further improvements and refinements will come over time.
