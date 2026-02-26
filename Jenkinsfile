pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Jathushanselvarajah/apiNode.git'
            }
        }
        stage('Build Image') {
            steps {
                sh '''
                    ssh -o StrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_ed25519 azureuser@51.120.126.140 << 'EOF'
                    cd ~/apiNode || git clone https://github.com/Jathushanselvarajah/apiNode.git ~/apiNode
                    cd ~/apiNode
                    git pull origin main
                    docker build -t api-node .
                    echo "Image Docker API Node construite !"
EOF
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    ssh -o StrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_ed25519 azureuser@51.120.126.140 << 'EOF'
                    docker stop api-node || true
                    docker rm api-node || true
                    docker run -d --name api-node -p 3000:3000 --env-file ~/apiNode/.env api-node
                    echo "API Node déployée !"
EOF
                '''
            }
        }
    }
}
