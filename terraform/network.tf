# VPC

resource "aws_vpc" "main" {
  cidr_block = "192.168.0.0/16"

  instance_tenancy = "default"

  enable_dns_hostnames = true
  enable_dns_support   = true

  enable_classiclink               = false
  enable_classiclink_dns_support   = false
  assign_generated_ipv6_cidr_block = false

  tags = {
    Name = "main"
  }
}

output "vpc_id" {
  value     = aws_vpc.main.id
  sensitive = false

}

# Internet Gateway

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "main"
  }
}

output "internet_gateway_id" {
  value     = aws_internet_gateway.main.id
  sensitive = false
}

# Subnets

resource "aws_subnet" "public_1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "192.168.0.0/18"
  availability_zone       = "eu-central-1a"
  map_public_ip_on_launch = true

  tags = {
    Name                        = "public-1-eu-central-1a"
    "kubernetes.io/cluster/eks" = "shared"
    "kubernetes.io/role/elb"    = "1"
  }
}

resource "aws_subnet" "public_2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "192.168.64.0/18"
  availability_zone       = "eu-central-1b"
  map_public_ip_on_launch = true

  tags = {
    Name                        = "public-2-eu-central-1b"
    "kubernetes.io/cluster/eks" = "shared"
    "kubernetes.io/role/elb"    = "1"
  }
}

resource "aws_subnet" "private_1" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "192.168.128.0/18"
  availability_zone = "eu-central-1a"

  tags = {
    Name                        = "private-1-eu-central-1a"
    "kubernetes.io/cluster/eks" = "shared"
    "kubernetes.io/role/elb"    = "1"
  }
}

resource "aws_subnet" "private_2" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "192.168.192.0/18"
  availability_zone = "eu-central-1b"

  tags = {
    Name                        = "private-2-eu-central-1b"
    "kubernetes.io/cluster/eks" = "shared"
    "kubernetes.io/role/elb"    = "1"
  }
}

output "public_subnet_ids" {
  value     = [aws_subnet.public_1.id, aws_subnet.public_2.id]
  sensitive = false
}

output "private_subnet_ids" {
  value     = [aws_subnet.private_1.id, aws_subnet.private_2.id]
  sensitive = false
}

# eip

resource "aws_eip" "nat1" {
  depends_on = [
    aws_internet_gateway.main
  ]
}

resource "aws_eip" "nat2" {
  depends_on = [
    aws_internet_gateway.main
  ]
}

# nat gateways

resource "aws_nat_gateway" "nat1" {
  allocation_id = aws_eip.nat1.id
  subnet_id     = aws_subnet.public_1.id
  depends_on = [
    aws_internet_gateway.main
  ]

  tags = {
    Name = "nat1"
  }
}

resource "aws_nat_gateway" "nat2" {
  allocation_id = aws_eip.nat2.id
  subnet_id     = aws_subnet.public_2.id
  depends_on = [
    aws_internet_gateway.main
  ]

  tags = {
    Name = "nat2"
  }
}

output "nat1_id" {
  value     = aws_nat_gateway.nat1.id
  sensitive = false
}

output "nat2_id" {
  value     = aws_nat_gateway.nat2.id
  sensitive = false
}

# Route Tables

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "public"
  }

}

resource "aws_route_table" "private1" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat1.id
  }

  tags = {
    Name = "private1"
  }
}

resource "aws_route_table" "private2" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat2.id
  }

  tags = {
    Name = "private2"
  }
}

output "public_route_table_id" {
  value     = aws_route_table.public.id
  sensitive = false
}

output "private1_route_table_id" {
  value     = aws_route_table.private1.id
  sensitive = false
}

output "private2_route_table_id" {
  value     = aws_route_table.private2.id
  sensitive = false
}

# Route Table Association

resource "aws_route_table_association" "public_1" {
  subnet_id      = aws_subnet.public_1.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "public_2" {
  subnet_id      = aws_subnet.public_2.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private_1" {
  subnet_id      = aws_subnet.private_1.id
  route_table_id = aws_route_table.private1.id
}

resource "aws_route_table_association" "private_2" {
  subnet_id      = aws_subnet.private_2.id
  route_table_id = aws_route_table.private2.id
}


