node: v25.2.1

使用リソース
・ecr


docker build --platform linux/amd64 -t sofi-test-app .
docker run -p 3000:3000 sofi-test-app
aws ecr create-repository --repository-name sofi-test-app --profile mel-aws

mel_sugawara@mel-mac-kinoshita my-app % aws ecr create-repository --repository-name sofi-test-app --profile mel-aws
aws ecr get-login-password --profile mel-aws --region ap-northeast-1 | docker login --username AWS --password-stdin 326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/sofi-test-app
docker tag sofi-test-app:latest 326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/sofi-test-app
docker push 326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/sofi-test-app

ECSリソースをcfで作成
aws cloudformation create-stack --stack-name hoge --template-body file://.aws/cf.yml --profile mel-aws --capabilities CAPABILITY_NAMED_IAM

{
    "repository": {
        "repositoryArn": "arn:aws:ecr:ap-northeast-1:326730684696:repository/sofi-test-app",
        "registryId": "326730684696",
        "repositoryName": "sofi-test-app",
        "repositoryUri": "326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/sofi-test-app",
        "createdAt": "2026-01-25T11:03:54.333000+09:00",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": false
        },
        "encryptionConfiguration": {
            "encryptionType": "AES256"
        }
    }
}

--------------------------------------------
memo
・ECRとは？
・クラスターとは？
