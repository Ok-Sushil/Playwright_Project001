pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Ok-Sushil/Playwright_Project001.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t playwright-framework .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker run playwright-framework'
            }
        }

    }
}