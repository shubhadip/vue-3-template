pipeline{
    agent any;
    tools {nodejs "node"}
    
    stages{
        stage('Prepare') {
            steps {
                sh 'node --version';
                sh 'npm install yarn';
                sh 'yarn install';
            }
        }
        stage('build') {
            steps {
                sh 'yarn build';
            }
        }
    }
}