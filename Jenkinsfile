pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-framework .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                docker run --rm \
                -v $(pwd)/allure-results:/app/allure-results \
                playwright-framework
                '''
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh '''
                docker run --rm \
                -v $(pwd)/allure-results:/app/allure-results \
                -v $(pwd)/allure-report:/app/allure-report \
                playwright-framework \
                npx allure generate /app/allure-results --clean -o /app/allure-report
                '''
            }
        }

        stage('Slack Notification') {
            steps {
                sh """
                curl -X POST -H 'Content-type: application/json' \
                --data '{
                    "text":"✅ Jenkins Playwright Execution Completed 🚀\\n🔗 Build Details: ${BUILD_URL}"
                }' \
                SLACK_WEBHOOK_URL
                """
            }
        }

    }
}