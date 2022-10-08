pipeline {

  agent any

  stages {
    stage('Build Image') {
      steps {
        sh 'docker build -t unigraduate-client ./client'
        sh 'docker build -t unigraduate-server ./server'
      }
    }

    stage('Push Image') {
      steps {

        // use the docker token saved in the jenkins credentials to login
        withCredentials([string(credentialsId: 'DockerSecret', variable: 'TOKEN')]) {
            sh 'docker login -u waseemtannous -p ${TOKEN}'

            sh 'docker tag unigraduate-client waseemtannous/unigraduate-client:latest'
            sh 'docker tag unigraduate-server waseemtannous/unigraduate-server:latest'

            sh 'docker push waseemtannous/unigraduate-client:latest'
            sh 'docker push waseemtannous/unigraduate-server:latest'
        }
      }
    }
  }


  post {
      failure {
        script {
          slackSend(
            color: "#FF0000",
            channel: "personal-projects",
            message: "UniGraduate Status: FAILED"
          )
        }
      }

     success {
        script {
          slackSend(
            color: "#00FF00",
            channel: "personal-projects",
            message: "UniGraduate Status: SUCCESS"
          )
        }
      }
    }
}