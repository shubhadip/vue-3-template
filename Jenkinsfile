pipeline {
  agent any;
  tools {
    nodejs "node"
  }
  stages {
    stage('Prepare') {
      steps {
        sh 'node --version';
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build';
      }
    }
    stage('SonarQube Analysis'){
      def scannerHome = tool 'sonarqube';
      steps {
        withSonarQubeEnv('sonarqube') {
          sh '''
          ${scannerHome}/bin/sonar-scanner \
          -D sonar.projectKey=vue-3-template \
          -D sonar.projectName=vue-3-template \
          -Dsonar.projectVersion=${env.BUILD_NUMBER} \
          -D sonar.sources=. \
          '''
        }
      }
    }
  }
}