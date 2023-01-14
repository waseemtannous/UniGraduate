resource "aws_iam_role" "clusterRole" {

  name = "unigraduate-cluster-role"

  assume_role_policy = <<EOF
{

"Version": "2012-10-17",
"Statement": [
    {
    "Effect": "Allow",
    "Principal": {
        "Service": "eks.amazonaws.com"
    },
    "Action": "sts:AssumeRole"
    }
]
}
EOF

}

# rules for the cluster role
resource "aws_iam_role_policy_attachment" "clusterRolePolicyAttachment" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.clusterRole.name
}

resource "aws_iam_role_policy_attachment" "clusterRoleServicePolicyAttachment" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"
  role       = aws_iam_role.clusterRole.name
}

resource "aws_iam_role_policy_attachment" "AmazonEKSVPCResourceController" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
  role       = aws_iam_role.clusterRole.name
}



resource "aws_security_group" "unigraduateCluster" {
  name        = "terraform-eks-demo-cluster"
  description = "Cluster communication with worker nodes"
  vpc_id      = aws_vpc.vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "unigraduateEks-nodes-comms"
  }
}

resource "aws_security_group_rule" "unigraduate-luster-ingress-workstation-https" {
  cidr_blocks       = [var.workstationIp]
  description       = "Allow workstation to communicate with the cluster API Server"
  from_port         = 443
  protocol          = "tcp"
  security_group_id = aws_security_group.unigraduateCluster.id
  to_port           = 443
  type              = "ingress"
}

resource "aws_eks_cluster" "unigraduateEks" {
  name = "unigraduateEks"

  role_arn = aws_iam_role.clusterRole.arn

  # attach public and private subnets to the cluster
  vpc_config {
    subnet_ids = [
      aws_subnet.public[0].id,
      aws_subnet.public[1].id,
      aws_subnet.private[0].id,
      aws_subnet.private[1].id
    ]
    security_group_ids = [aws_security_group.unigraduateCluster.id]
  }

  depends_on = [
    aws_iam_role_policy_attachment.clusterRolePolicyAttachment,
    aws_iam_role_policy_attachment.clusterRoleServicePolicyAttachment
  ]
}
