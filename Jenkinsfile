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
  }
}