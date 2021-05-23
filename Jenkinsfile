pipeline{
    agent any;
     tools {nodejs "node"}
    stages{
         stage('prepare') {
            steps {
                sh 'node --version';
                sh 'npm install yarn';
                sh 'yarn install';
            }
         stage('build') {
            steps {
                sh 'yarn build';
            }
        }
    }
}
}