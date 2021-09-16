@Library("com.optum.jenkins.pipeline.library@master") _

import com.optum.jenkins.pipeline.library.docker.Docker
import com.optum.jenkins.pipeline.library.kubernetes.Kubernetes
import com.optum.jenkins.pipeline.library.flowdock.Flowdock
import groovy.json.JsonSlurper

//Some defined parameters
String dockerFilePath = 'Dockerfile'
String dockerCredentialsId = 'docker_deploy'
String dockerHost = 'docker.repo1.uhc.com'
String repository = 'docusaurus'
String namespace = 'doesdocker'
String versionPrefix = '1.0'
String tagBase = "$dockerHost/$namespace/$repository:$versionPrefix"
String tagBaseInt = "$dockerHost/$namespace/$repository"
String namespace_dev = 'doesapi-dev'
String namespace_prod = 'doesapi-prod'
String credentials_prod = 'k8-token-prod'
String credentials_dev = 'k8-token-dev'
String cluster_ctc = 'k8s-prod-ctc-aci.optum.com'
// String credentials_flow = 'FLOWDOCK_API_PERSONAL'
String flow_token = 'FLOWDOCK_API_PERSONAL_PRIV'
String flow_name = 'chef-agent-self-heal'

pipeline {
   agent none

   environment {
      FLOW_TOKEN = credentials('FLOWDOCK_API_PERSONAL_PRIV')
   }
   stages {
      stage('Build and Integration Test of DoesAPI') {
         agent {
            node {
               label 'docker-kitchensink-slave'
            }
         }
         stages {
            stage('Build/Tag & Push Docker Image Repo1') {
               when {
                 branch 'development'
               }
               steps {
                 sh "source ./caller.sh && notify 'Tagging Image $tagBase.${BUILD_NUMBER} and pushing it to repo1' 'blue' 'Pushing to repo1' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
                 glDockerImageBuildPush tag: "$tagBase.${BUILD_NUMBER}", dockerCredentialsId: dockerCredentialsId, extraBuildOptions: "-f ${dockerFilePath} --no-cache", dockerHost: dockerHost
                 sh "source ./caller.sh && notify 'Image $tagBase.${BUILD_NUMBER} successfully pushed to repo1' 'green' 'Pushed to repo1' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
               }
            }
            stage('Build/Tag $ Push Prod Docker Image to Repo1') {
               when {
                  branch 'master'
               }
               steps {
                 sh "source ./caller.sh && notify 'Tagging Image $tagBase.${BUILD_NUMBER}_prod and pushing it to repo1' 'blue' 'Pushing to repo1' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
                 glDockerImageBuildPush tag: "$tagBase.${BUILD_NUMBER}_prod", dockerCredentialsId: dockerCredentialsId, extraBuildOptions: "-f ${dockerFilePath} --no-cache", dockerHost: dockerHost   
                 sh "source ./caller.sh && notify 'Image $tagBase.${BUILD_NUMBER}_prod successfully pushed to repo1' 'green' 'Pushed to repo1' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
               }
            }
         }
      }
      stage('Deploy to Kubernetes OSFI Development ENV, Update Environment Variables, Container Images, and Resources') {
         agent { node { label 'docker-kubectl'} }
         when {
            branch 'development'
         }
         steps {
            echo 'Updating docusaurus-dev namespace'
            sh 'kubectl version --client'
            echo "${BUILD_NUMBER}"
            echo "$tagBase.${BUILD_NUMBER}"
            glKubernetesUpdate credentials: credentials_dev, cluster: cluster_ctc, namespace: namespace_dev, kind: "deployment", name: "docusaurus", containerImages: ["docusaurus":"$tagBase.${BUILD_NUMBER}"], env: "Dev", isProduction: false
         }
         post {
            success {
               echo 'doesapi-dev has been updated successfully'
               sh "source ./caller.sh && notify 'Image $tagBase.${BUILD_NUMBER} has been deployed to Dev/Stage K8 Environment Successfully' 'green' 'Deployed to Dev/Stage K8 ENV' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"  
            }
            failure {
               echo 'Updating doesapi-dev environment has failed'
               sh "source ./caller.sh && notify 'Image $tagBase.${BUILD_NUMBER} deployment to Dev/Stage K8 Environment has failed' 'red' 'Failed deployment to Dev/Stage K8 ENV' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"  
            }
         }
      }
      stage('Deploy to Kubernetes OSFI Production ENV, Update Environment Variables, Container Images, and Resources') {
         agent { node { label 'docker-kubectl'} }
         when {
            branch 'master'
         }
         steps {
            echo 'Updating docusaurus-prod namespace'
            sh 'kubectl version --client'
            echo "${BUILD_NUMBER}"
            echo "$tagBase.${BUILD_NUMBER}"
            glKubernetesUpdate credentials: credentials_prod, cluster: cluster_ctc, namespace: namespace_prod, kind: "deployment", name: "docusaurus", containerImages: ["docusaurus":"$tagBase.${BUILD_NUMBER}_prod"], env: "Prod", isProduction: true
         }
         post {
            success {
              echo 'docusaurus-prod has been updated successfully'
              sh "source ./caller.sh && notify 'Image $tagBaseInt.${BUILD_NUMBER}_prod has been deployed to Production K8 Environment Successfully' 'green' 'Deployed to Production K8 ENV' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
            }
            failure {
              echo 'Updating docusaurus-prod environment has failed'
              sh "source ./caller.sh && notify 'Image $tagBaseInt.${BUILD_NUMBER}_prod deployment to Production K8 Environment has failed' 'red' 'Failed deployment to Production K8 ENV' '${BRANCH_NAME}' '${BUILD_NUMBER}' '$FLOW_TOKEN'"
            }
         }
      }
   }
}
