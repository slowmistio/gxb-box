# 产品介绍

公信宝数据交易客户端GXB-Box是基于Nodejs开发的一个部署在商户和数据源本地的客户端，商户和数据源可以通过本地调用的方式购买和出售数据，数据交易的全程请求参数和回传数据都是经过加密处理的，而GXB-BOX简化了这样的一个流程。

## 环境依赖

必要环境: Node 6+

建议系统: OSX、Linux

## Node环境安装

建议使用NVM([Node Version Manager](https://github.com/creationix/nvm))进行安装:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
nvm install v6
nvm use v6
```

## 克隆项目

```
git clone https://github.com/gxchain/gxbox.git
```

## 依赖安装

调试模式依赖于babel-node, 在克隆的工程下执行以下命令安装依赖:


```
npm install -g babel-node
npm install
```

## 开发模式启动

```
npm start
```

## 部署和生产环境启动

```
npm run build
npm run server
```

## 对接文档
[https://doc.gxb.io/box/](https://doc.gxb.io/box/)

## 常见问题

### Q: 在设置了多重签名后,数据交易失败了
A: 多重签名涉及到效率问题, 数据交易采用活跃权限进行单重签名, 请勿在参与数据交易的账户中设置多重签名,以免造成签名验证失败