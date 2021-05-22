pipeline{
  agent any;
  environment {
    NAME = 'hakuna'
    LASTNAME = 'matata'
  }
  stages {
    stage('Build'){
      steps {
        sh "yarn install";
        sh "echo 'Building ...";
        sh "yarn build";
      }
    }
    // stage('Retry'){
    //   steps {
    //     retry(3){
    //       sh "echo am not going to work "
    //     }
    //   }
    // }
    stage('Test'){
      steps {
        echo 'Testing ...';
      }
    }
    stage('Deploy'){
      steps {
        retry(3){
          sh 'echo title';
        }
        // timeout(time: 3, unit: 'SECONDS'){
        //   sh 'sleep 5'
        // }
        echo 'Deploying ...';
        sh 'echo ${NAME} ${LASTNAME} Deploying ...'
      }
    }
  }
  post {
    always {
      echo " always executed";
    }
    success {
      echo " executed if success";
    }
    failure {
      echo "executed if failure";
    }
    unstable {
      echo " executed if unstable";
    }
  }
}