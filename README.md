Hello, 

This project is a proof of concept. However, what I envision this project to be is to serve for many tests that are required for a functional video playback project, in specific towards sports video playback. 

I hope to learn a lot from this project as I seem to learn things quicker by consistently iterating, even if it may not be the correct way. I intend to gain a deep understanding of how these technologies I will be using. With that being said I think this will only further my passion of sports and technology.

# Sports Video Playback Tester

A simple web-based sports video playback tester, designed for testing basic video playback controls, with additional features tailored for sports highlights. This project includes a mock backend API for video metadata and highlight markers.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Video Playback Controls**: Play, Pause, Skip Forward 15s, Skip Backward 15s, Replay Last 10s
- **Sports-Specific Features**: Replay last 10 seconds to quickly review highlights
- **Mock Backend API**: Serves video metadata for testing purposes

## Demo
Add a screenshot or gif showing the interface and video controls.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- Git (to clone the repository)

### Steps
1. **Check what version of Node.js is installed**
   ```bash
   node -v

- If your version is < 18.0, proceed to step 2! 
- If your version is >18.0 then skip part 2 and proceed to number 3!

2. **Install NVM (Optional)**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   nvm -v
   nvm install latest


3. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sports-video-playback-tester.git

   
4. **Navigate to the project**   
   cd sports-video-playback-tester

5. **Navigate to the backend of the project**
   cd backend

6. **Install Backend Dependencies**
   npm install

7. **Run the Backend Server**
   node server.js

