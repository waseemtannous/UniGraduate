variable "awsRegion" {
  description = "AWS Region"
  type        = string
  default     = "eu-central-1"
}

variable "vpcName" {
  description = "VPC Name"
  type        = string
  default     = "unigraduateVpc"
}

variable "vpcCidr" {
  description = "VPC CIDR"
  type        = string
  default     = "10.0.0.0/16"
}

variable "privateCidr" {
  description = "Private Subnet CIDR"
  type        = list(string)
  # default     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "publicCidr" {
  description = "Private Subnet CIDR"
  type        = list(string)
  # default     = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
  default = ["10.0.3.0/24", "10.0.4.0/24"]
}

variable "eksName" {
  description = "EKS Name"
  type        = string
  default     = "unigraduateEks"
}

variable "eksWorkerGroupName" {
  description = "EKS Worker Group Name"
  type        = string
  default     = "unigraduate-group"
}

variable "eksWorkerGroupInstanceType" {
  description = "EKS Worker Group Instance Type"
  type        = string
  default     = "t2.small"
}

variable "eksMaxSize" {
  description = "EKS Worker Group Max Size"
  type        = number
  default     = 2
}

variable "eksMinSize" {
  description = "EKS Worker Group Min Size"
  type        = number
  default     = 1
}

variable "workstationIp" {
  description = "Workstation IP"
  type        = string
}

# variable "aws_access_key_id" {
#   description = "AWS Access Key"
#   type        = string
# }

# variable "aws_secret_access_key" {
#   description = "AWS Secret Key"
#   type        = string
# }

# variable "bastionProvisioner" {
#   description = "Bastion Provisioner"
#   type        = list(string)
#   default = [
#     "sudo apt-get update",
#     "sudo apt install unzip",
#     "curl \"https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip\" -o \"awscliv2.zip\"",
#     "unzip awscliv2.zip",
#     "sudo ./aws/install",
#     "aws --version",
#     "curl -LO \"https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl\"",
#     "chmod +x ./kubectl",
#     "sudo mv ./kubectl /usr/local/bin/kubectl",
#     "aws configure set aws_access_key_id ${var.awsAccessKey}",
#     "aws configure set aws_secret_access_key ${var.awsSecretKey}",
#     "aws configure set default.region ${var.awsRegion}",
#     "aws configure set default.output json",
#     "aws eks --region ${var.awsRegion} update-kubeconfig --name ${var.eksName}",
#   ]
# }

# aws sts get-caller-identity
# aws eks --region eu-central-1 update-kubeconfig --name unigraduateEks
