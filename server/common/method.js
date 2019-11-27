/**
* 获取openid
* @param  { string } code [调用获取openid的接口需要code参数]
*/
function getOpenId(code) {
    const appid = config.appid;
    const secret = config.secret;
  
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`;
  
    request(url, function(error, response, body) {
  
        if (!error && response.statusCode == 200) {
           const openid =  body.openid;
           getAccessToken(openid);   //获取openid成功后调用getAccessToken
        }
  
    });
}
/**
* 获取access_token
*  @param  { string } openid [发送模板消息的接口需要用到openid参数]
*/
function getAccessToken(openid) {
  const appid = config.appid;
  const secret = config.secret;
  const grant_type = config.grant_type;

  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`;

  request(url, function(error, response, body) {

      if (!error && response.statusCode == 200) {

          const access_token= JSON.parse(body).access_token;
          sendTemplateMsg(openid, access_token); //获取access_token成功后调用发送模板消息的方法

      } else {
          throw 'update access_token error';
      }
  });


}
/**
* 发送模板消息
* @param  { string } openid [发送模板消息的接口需要用到openid参数]
* @param  { string } access_token [发送模板消息的接口需要用到access_token参数]
*/

function sendTemplateMsg(openid, access_token) {
    const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${access_token}`; //发送模板消息的接口

    const requestData = { //发送模板消息的数据
        touser: openid,
        template_id: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        url: 'http://weixin.qq.com/download',
        data: {
            first: {
                value: '身份信息',
                color: "#173177"
            },
            keyword1: {
                value: '张三',
                color: '#1d1d1d'
            },
            keyword2: {
                value: '男',
                color: '#1d1d1d'
            },
            keyword3: {
                value: '45',
                color: '#1d1d1d'
            },
            remark: {
                value: '已登记！',
                color: '#173177'
            }
        }
    };

    request({
        url: url,
        method: 'post',
        body: requestData,
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('模板消息推送成功'); 
        }
    });
}
exports.getOpenId=getOpenId;
exports.getAccessToken=getAccessToken;
exports.sendTemplateMsg=sendTemplateMsg;