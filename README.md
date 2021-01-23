source: https://www.magalix.com/blog/nodejs-app-sample-from-docker-to-kubernetes-cluster
steps:
## 0 create node library 
## 1 create image from Dockerfile and push it to docker hub
docker tag node-server 30300101/nodejs-starter
docker push 30300101/nodejs-starter:1.0


## 2 edit the deploy.yaml file and run the command bellow to have it deploy for kubernetes object
kubectl create -f deploy.yaml


## 3 observe teh deployment and pods replicas
kubectl get deploy,po

## output
#NAME                                READY   UP-TO-DATE   AVAILABLE   AGE
#deployment.apps/nodejs-deployment   2/2     2            2           5m44s

#NAME                                    READY   STATUS    RESTARTS   AGE
#pod/nodejs-deployment-746bdb6c4-h4dwb   1/1     Running   0          5m44s
#pod/nodejs-deployment-746bdb6c4-kqjmj   1/1     Running   0          5m44s

## 4 expose ports to be able to access the pod outside of the cluster
kubectl expose deployment nodejs-deployment --type="LoadBalancer"

## 5 - execute the command to get the host
kubectl get svc

## output
#NAME                TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
#Kubernetes          ClusterIP      10.96.0.1                 443/TCP          40h
#nodejs-deployment   LoadBalancer   10.100.153.82   192.168.79.70   3000:30250/TCP   22h

## 6 make REST request to the api on the host under CLUSTER-IP with the port under PORTS(S)
curl --request GET 'http://10.100.153.82:3000'
