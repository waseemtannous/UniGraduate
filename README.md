# UniGraduate

![Logo](images/logo.png)

UniGraduate, an innovative full stack web application designed to change the way students create and manage their course schedules. Leveraging the power of artificial intelligence, UniGraduate intelligently generates a selection of tailor-made schedules, offering students the flexibility to choose from multiple options that best fit their needs and preferences.

UniGraduate boasts an intuitive user interface, created using technologies such as HTML, CSS, JavaScript, React, and Bootstrap. This ensures a seamless and enjoyable experience for users as they navigate through the platform's extensive course and lecturer catalogs. Students can effortlessly explore detailed information on various courses, and gain insights into the expertise and background of their potential lecturers.

In essence, UniGraduate is the ultimate scheduling companion for students, offering personalized solutions for efficient course planning while empowering them to make well-informed decisions in their academic journey.

## Tech-Stack

- Frontend: HTML, CSS, JavaScript, React, Bootstrap
- Backend: JavaScipt, Node.js, Express.js, MongoDB
- DevOps: AWS, Docker, Kubernetes, Helm, Terraform
- GitOps: GitHub Actions, ArgoCD

## Installation

Running the app requires Terraform, AWS CLI and ArgiCD CLI to be installed on your machine. You will also need to have an AWS account.

1. Configure AWS CLI

Create a new user with programmatic access and administrator permissions. Download the credentials file and run the following command to configure AWS CLI.

```bash
aws configure
```

2. Clone the repository

```bash
git clone https://github.com/waseemtannous/UniGraduate.git
```

3. Apply Terraform configuration

```bash
cd UniGraduate/terraform
terraform init
terraform apply
```

This will create a new EKS cluster.

4. Configure kubectl

```bash
aws eks --region eu-central-1 update-kubeconfig --name eks --profile unigraduate
```

5. Install nginx ingress controller and ArgoCD

```bash
cd UniGraduate/k8s/addons
kubectl apply -f nginxIngressController.yaml

kubectl create namespace argocd
kubectl apply -n argocd -f argocd.yaml
```

6. Expose ArgoCD service and get password

```bash
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
argocd admin initial-password -n argocd
```

7. Apply ArgoCD configuration

```bash
cd UniGraduate/argocd
kubectl apply -f app.yaml
```

8. Get the address of the ingress controller

```bash
kubectl get ing
```
