node: v25.2.1

使用リソース
・ecr

docker build --platform linux/amd64 -t hello-world .
aws ecr get-login-password --profile mel-aws --region ap-northeast-1 | docker login --username AWS --password-stdin 326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/hello-repository-ts
docker tag hello-world 326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/hello-repository-ts
docker push  326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/hello-repository-ts 


docker build --platform linux/amd64 -t sofi-test-app .
docker run -p 3000:3000 sofi-test-app


mel_sugawara@mel-mac-kinoshita test % aws ecr create-repository --repository-name hello-repository-ts --region ap-northeast-1 --profile mel-aws
{
    "repository": {
        "repositoryArn": "arn:aws:ecr:ap-northeast-1:326730684696:repository/hello-repository-ts",
        "registryId": "326730684696",
        "repositoryName": "hello-repository-ts",
        "repositoryUri": "326730684696.dkr.ecr.ap-northeast-1.amazonaws.com/hello-repository-ts",
        "createdAt": "2026-01-25T09:26:55.888000+09:00",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": false
        },
        "encryptionConfiguration": {
            "encryptionType": "AES256"
        }
    }
}