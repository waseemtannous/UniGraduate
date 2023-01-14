resource "aws_vpc" "vpc" {
  cidr_block = var.vpcCidr

  tags = tomap(
    {
      Name                                   = var.vpcName
      "kubernetes.io/cluster/${var.eksName}" = "shared"
    }
  )

}

# create a gateway
resource "aws_internet_gateway" "gateway" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = "unigraduate-gateway"
  }
}


# get 2 availability zones
data "aws_availability_zones" "available" {
  state = "available"
}

# create 2 private and 2 public subnets
resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = var.privateCidr[count.index]
  availability_zone = data.aws_availability_zones.available.names[count.index]
  tags = tomap(
    {
      Name                                   = "unigraduate-private-${count.index}-${data.aws_availability_zones.available.names[count.index]}}"
      "kubernetes.io/cluster/${var.eksName}" = "shared"
      "kubernetes.io/role/internal-elb"      = "1"
    }
  )
}

resource "aws_subnet" "public" {
  count                   = 2
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.publicCidr[count.index]
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  tags = tomap(
    {
      Name                                   = "unigraduate-public-${count.index}-${data.aws_availability_zones.available.names[count.index]}"
      "kubernetes.io/cluster/${var.eksName}" = "shared"
      "kubernetes.io/role/elb"               = "1"
    }
  )
}

# create ip allocation for nat gateway
resource "aws_eip" "natIp" {
  vpc = true

  tags = {
    Name = "unigraduate-nat-ip"
  }
}

# create a nat gateway
resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.natIp.id
  subnet_id     = aws_subnet.public[0].id

  depends_on = [
    aws_internet_gateway.gateway
  ]

  tags = {
    Name = "unigraduate-nat"
  }
}

# create a route tables for public and private subnets
resource "aws_route_table" "privateRouteTable" {
  vpc_id = aws_vpc.vpc.id
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat.id
  }
  tags = {
    Name = "unigraduate-private-route-table"
  }
}

resource "aws_route_table" "publicRouteTable" {
  vpc_id = aws_vpc.vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gateway.id
  }

  tags = {
    Name = "unigraduate-public-route-table"
  }
}

# associate subnets with route tables
resource "aws_route_table_association" "privateRouteTableAssociation" {
  count          = 2
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.privateRouteTable.id
}

resource "aws_route_table_association" "publicRouteTableAssociation" {
  count          = 2
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.publicRouteTable.id
}

