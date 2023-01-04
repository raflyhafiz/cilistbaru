pipeline {  
  agent any 
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))   
  }
  stages {
    stage('Build Image Backend') {
        steps {
            script{
                if (env.BRANCH_NAME == 'staging') {
                    dir('backend'){
                        sh 'docker build -t rafly21/be-cilist:0.0.$BUILD_NUMBER-staging .'
                    }
                }
                else if (env.BRANCH_NAME == 'master') {
                    dir('backend'){
                         sh 'docker build -t rafly21/be-cilist:0.0.$BUILD_NUMBER-master .' 
                    }
                }
                else {
                     sh 'echo Nothing to Build'
                }
            }
        }
    }
    stage('Push to Registry Backend') {
        steps {
            script {
             if (env.BRANCH_NAME == 'staging') {
            sh 'docker push rafly21/be-cilistbaru:0.0.$BUILD_NUMBER-staging'
                }
                else if (env.BRANCH_NAME == 'master') {
            sh 'docker push rafly21/be-cilistbaru:0.0.$BUILD_NUMBER-master' 
                }
                else {
                    sh 'echo Nothing to Push'
                }
        }
      }
    } 
    stage('Build Image Frontend') {
        steps {
            script{
                if (env.BRANCH_NAME == 'staging') {
                    dir('frontend'){
                        sh 'docker build -t rafly21/fe-cilist:0.0.$BUILD_NUMBER-staging .'
                    }
                }
                else if (env.BRANCH_NAME == 'master') {
                    dir('frontend'){
                         sh 'docker build -t rafly21/fe-cilist:0.0.$BUILD_NUMBER-master .' 
                    }
                }
                else {
                     sh 'echo Nothing to Build'
                }
            }
        }
    }
    stage('Push to Registry Frontend') {
        steps {
            script {
             if (env.BRANCH_NAME == 'staging') {
            sh 'docker push rafly21/fe-cilistbaru:0.0.$BUILD_NUMBER-staging'
                }
                else if (env.BRANCH_NAME == 'master') {
            sh 'docker push rafly21/fe-cilistbaru:0.0.$BUILD_NUMBER-master' 
                }
                else {
                    sh 'echo Nothing to Push'
                }
        }
      }
    } 
}
    //  post {
    //         success {
    //             slackSend channel: '#jenkinsslack',
    //             color: 'good',
    //             message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
    //         }    

    //         failure {
    //             slackSend channel: '#jenkinsslack',
    //             color: 'danger',
    //             message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
    //             }

    //     }
       
}


