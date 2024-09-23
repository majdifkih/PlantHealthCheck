# Application Name: PlantHealthCheck

## Description
PlantHealthCheck is a web application that allows users to diagnose plant diseases from images. Using advanced machine learning models, the application analyzes uploaded photos and identifies potential diseases, providing detailed information about the plant and recommendations for necessary care. Users can also share their diagnostics with the community, explore posts from other users, and manage their own profile.

## Features
- **Image Analysis**: Upload a photo of the plant or take one directly from the application to detect the presence of a disease.
- **Comprehensive Diagnosis**: If a disease is detected, the application provides a detailed diagnosis and information about the disease and the plant (name, type, geographical region, etc.).
- **Diagnosis History**: Each user can view the history of their past diagnostics.
- **Community Sharing**: Users can share their diagnostics as posts, view posts from other users, and save their favorite posts.
- **User Profile**: Manage your profile, view usage statistics, and edit personal information.

## Technologies Used
- **Frontend**: React with TypeScript for a dynamic and modern user interface.
- **Backend**: Express.js with TypeScript for handling requests and RESTful API.
- **Database**: MySQL for managing user data, diagnostics, and posts.
- **Machine Learning**: Integration of an image recognition model via TensorFlow.js, allowing for direct model execution within the application.
- **DevOps**: Docker and Jenkins for containerization and continuous integration/deployment (CI/CD).
- **Authentication**: Use of JSON Web Tokens (JWT) to secure access to different parts of the application.

## Installation

### Prerequisites
- Node.js version 14.x or higher.
- Docker for container usage.
- MySQL for the database.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/majdifkih/PlantHealthCheck.git

2. Install dependencies for both frontend and backend:
   ```bash
   npm install

3. Set up the MySQL database and adjust the parameters in the .env file.
4. Start the application with Docker:
    ```bash
    docker-compose up

## Usage
Go to http://localhost:3000 to access the application.
Create a user account and log in to access all features.
Use the image analysis feature to detect diseases on plants.    