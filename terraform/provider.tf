# use aws provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.21"
    }
  }
}

provider "aws" {
  region  = "eu-central-1"
  profile = "unigraduate"
}

